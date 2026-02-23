import React from 'react';

const ServiceDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-base-100 pb-20 animate-pulse">
      {/* Header Skeleton */}
      <div className="bg-base-200/50 py-12">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="w-32 h-8 bg-base-300 rounded-full" />
          <div className="w-2/3 h-16 bg-base-300 rounded-2xl" />
          <div className="w-1/3 h-6 bg-base-200 rounded-xl" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column Skeleton */}
          <div className="lg:col-span-2 space-y-12">
            <div className="grid grid-cols-2 gap-4 h-[500px]">
               <div className="bg-base-300 rounded-[2.5rem] h-full col-span-2 md:col-span-1" />
               <div className="hidden md:block bg-base-200 rounded-[2.5rem] h-full" />
            </div>
            <div className="space-y-4">
              <div className="w-48 h-10 bg-base-300 rounded-xl" />
              <div className="w-full h-4 bg-base-200 rounded" />
              <div className="w-full h-4 bg-base-200 rounded" />
              <div className="w-4/5 h-4 bg-base-200 rounded" />
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[3rem] border border-base-200 space-y-8">
              <div className="w-32 h-12 bg-base-300 rounded-xl" />
              <div className="space-y-4">
                <div className="w-full h-20 bg-base-200 rounded-2xl" />
                <div className="w-full h-20 bg-base-200 rounded-2xl" />
              </div>
              <div className="w-full h-16 bg-base-300 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsSkeleton;
import React from 'react';

const ServiceSkeleton = () => {
  return (
    <div className="bg-white rounded-[2.5rem] border border-base-200 overflow-hidden shadow-sm flex flex-col h-full animate-pulse">
      
      {/* 1. Image Placeholder */}
      <div className="h-64 w-full bg-base-300 relative">
        {/* Shimmer for the badge area */}
        <div className="absolute top-5 left-5 w-24 h-6 bg-base-200 rounded-full" />
      </div>

      {/* 2. Content Section */}
      <div className="p-8 flex flex-col flex-grow space-y-4">
        {/* Title Placeholder */}
        <div className="h-8 bg-base-300 rounded-xl w-3/4" />

        {/* Description Placeholders */}
        <div className="space-y-2">
          <div className="h-4 bg-base-200 rounded-lg w-full" />
          <div className="h-4 bg-base-200 rounded-lg w-5/6" />
        </div>

        {/* Features Placeholder */}
        <div className="space-y-3 mt-4 flex-grow">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-base-200" />
              <div className="h-4 bg-base-200 rounded-lg w-1/2" />
            </div>
          ))}
        </div>

        {/* 3. Footer Placeholder */}
        <div className="pt-6 border-t border-base-200 flex items-center justify-between">
          <div className="space-y-2">
            <div className="h-3 bg-base-200 rounded w-16" />
            <div className="h-8 bg-base-300 rounded-xl w-24" />
          </div>
          <div className="w-14 h-14 bg-base-300 rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ServiceSkeleton;
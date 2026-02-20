import ServiceSkeleton from '@/components/skeletons/ServiceSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                [...Array(3)].map((_, i)=> <ServiceSkeleton key={i}></ServiceSkeleton>)
            }
        </div>
    );
};

export default loading;
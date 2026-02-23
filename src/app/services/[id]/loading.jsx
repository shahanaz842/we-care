import ServiceDetailsSkeleton from '@/components/skeletons/ServiceDetailsSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div>
            <ServiceDetailsSkeleton></ServiceDetailsSkeleton>
        </div>
    );
};

export default loading;
import Logo from '@/components/layouts/Logo';
import Image from 'next/image';
import React from 'react';

const loading = () => {
    return (
        <div className='flex min-h-screen justify-center 
               items-center gap-5'>
            <h1 className='text-6xl font-bold tracking-tight text-neutral'>We</h1>
            <Image
                alt='We Care Logo'
                src={"/asset/care-logo.png"}
                width={70}
                height={70}
                className="object-contain animate-spin" // Ensures the logo doesn't stretch
            />
            <h1 className='text-6xl font-bold tracking-tight text-primary'>Care</h1>
        </div>
    );
};

export default loading;
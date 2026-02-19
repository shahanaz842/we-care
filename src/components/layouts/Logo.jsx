import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={"/"} className='flex items-center gap-2 group transition-opacity hover:opacity-90'>
            <Image 
                alt='We Care Logo' 
                src={"/asset/care-logo.png"} 
                width={40} 
                height={40}
                className="object-contain" // Ensures the logo doesn't stretch
            />
            <h2 className='text-2xl font-bold tracking-tight text-neutral'>
                We <span className='text-primary'>Care</span>
            </h2>
        </Link>
    );
};

export default Logo;
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={"/"} className='flex items-center gap-1'>
            <Image 
            alt='logo-hero-kidz' 
            src={"/asset/care-logo.png"} 
            width={40} 
            height={40}/>
            <h2 className='text-xl font-bold'>We <span className='text-primary'>Care</span></h2>
        </Link>
    );
};

export default Logo;
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ service }) => {
  return (
    <div className="group bg-white rounded-[2.5rem] border border-base-200 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col h-full">
      
      {/* 1. Image & Badge Section */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Floating Badge */}
        <div className="absolute top-5 left-5">
          <span className="bg-white/90 backdrop-blur-md text-primary px-4 py-1.5 rounded-full text-xs font-bold shadow-sm border border-primary/10">
            {service.badge}
          </span>
        </div>
        {/* Rating Overlay */}
        <div className="absolute bottom-4 right-5 bg-neutral/80 backdrop-blur-sm text-white px-3 py-1 rounded-xl text-sm flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-accent">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
          <span className="font-bold">{service.rating}</span>
          <span className="text-white/60 text-xs">({service.reviewCount})</span>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-neutral group-hover:text-primary transition-colors">
            {service.title}
          </h3>
        </div>

        <p className="text-neutral/60 text-sm leading-relaxed mb-6 line-clamp-2">
          {service.shortDescription}
        </p>

        {/* Mini Features List */}
        <div className="space-y-3 mb-8 flex-grow">
          {service?.features?.slice(0, 3).map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-neutral/80">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              {feature}
            </div>
          ))}
        </div>

        {/* 3. Footer / Action Section */}
        <div className="pt-6 border-t border-base-200 flex items-center justify-between">
          <div>
            <p className="text-xs text-neutral/40 uppercase font-bold tracking-widest">Starting from</p>
            <p className="text-2xl font-black text-neutral">
              {service.currency === "USD" ? "$" : ""}{service.pricingStartingFrom}
              <span className="text-sm font-medium text-neutral/40">/hr</span>
            </p>
          </div>

          <Link 
            href={`/services/${service.slug}`}
            className="bg-base-200 hover:bg-primary hover:text-white text-neutral p-4 rounded-2xl transition-all group/btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 transition-transform group-hover/btn:translate-x-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
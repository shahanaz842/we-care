import React from 'react';
import Image from 'next/image';

const SuccessAndTestimonials = () => {
  const stats = [
    { label: "Verified Caregivers", value: "1,200+" },
    { label: "Happy Families", value: "5,000+" },
    { label: "Safety Rating", value: "4.9/5" },
    { label: "Cities Covered", value: "120+" },
  ];

  return (
    <section className="py-24 bg-neutral text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. SUCCESS METRICS BAR */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-20 border-b border-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</h2>
              <p className="text-white/60 font-medium uppercase tracking-widest text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* 2. TESTIMONIAL SECTION */}
        <div className="mt-20 grid lg:grid-cols-5 gap-16 items-center">
          
          {/* Quote Content (Left) */}
          <div className="lg:col-span-3 space-y-8">
            <div className="inline-flex items-center gap-2 text-accent">
              {[...Array(5)].map((_, i) => (
                <svg key={i} fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm font-bold text-white/80">Excellent Service</span>
            </div>

            <blockquote className="text-3xl md:text-4xl font-medium leading-tight">
              "Finding a caregiver for my mother was overwhelming until we found <span className="text-primary italic">We Care.</span> The background checks gave me peace of mind, but the compassion of our caregiver, Sarah, changed our lives."
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 overflow-hidden relative border-2 border-primary">
                {/* Use a real headshot here */}
                <div className="w-full h-full bg-gray-400" /> 
              </div>
              <div>
                <p className="font-bold text-lg">Eleanor Thompson</p>
                <p className="text-white/50 text-sm">Daughter & Care Seeker, Chicago</p>
              </div>
            </div>
          </div>

          {/* Featured Image / Trust Badge (Right) */}
          <div className="lg:col-span-2 relative">
             <div className="relative h-[400px] w-full rounded-[3rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image 
                  src="/asset/hold2.jpg"
                  alt="Caregiver connection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
             </div>
             {/* Decorative Background Badge */}
             <div className="absolute -bottom-6 -right-6 bg-white text-neutral p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Top Rated</p>
                <p className="font-bold">2026 Care Platform of the Year</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SuccessAndTestimonials;
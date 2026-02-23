import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen lg:min-h-[85vh] w-full flex items-center overflow-hidden bg-white">
      
      {/* 1. BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/asset/family2.jpg" 
          alt="Happy family baking together"
          fill
          // We keep brightness high (100) and boost saturation for that colorful look
          className="object-cover object-center saturate-[1.4] brightness-[0.95] contrast-[1.05]" 
          priority
        />
        
        {/* 2. LIGHT GRADIENT */}
        {/* Fades from soft white on the left to reveal the full color on the right */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent lg:bg-gradient-to-r lg:from-white/95 lg:via-white/40 lg:to-transparent" />
      </div>

      {/* 3. CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Soft, colorful badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Trusted by 5,000+ local families
            </div>
            
            {/* Dark text for maximum legibility on a light background */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-neutral leading-[1.1]">
              Expert care for your <br />
              <span className="text-primary">loved ones.</span>
            </h1>
            
            {/* <p className="text-lg sm:text-xl text-neutral/70 leading-relaxed max-w-md mx-auto lg:mx-0">
              From joyful childcare to compassionate elderly support. Find and book verified local caregivers in minutes.
            </p> */}

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <button className="px-10 py-4 bg-primary text-white text-lg font-bold rounded-2xl shadow-xl shadow-primary/20 hover:bg-secondary transition-all active:scale-95">
                Get Started
              </button>
              <button className="px-10 py-4 bg-white/60 backdrop-blur-md border border-neutral/10 text-neutral text-lg font-bold rounded-2xl hover:bg-white/80 transition-all">
                See How It Works
              </button>
            </div>
          </div>

          {/* Right Side: The Search Card */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-[3rem] shadow-2xl shadow-neutral/10 w-full max-w-md border border-white relative overflow-hidden">
              <h3 className="hidden md:block text-2xl font-bold text-neutral mb-8">Find your perfect match</h3>
              
              <div className="space-y-5 relative z-10">
                <div>
                  <label className="block text-xs font-bold text-neutral/40 uppercase tracking-widest mb-2 ml-1">Service Needed</label>
                  <select className="w-full p-4 bg-base-200 border-none rounded-2xl text-neutral font-medium focus:ring-2 focus:ring-primary outline-none">
                    <option>Child Care</option>
                    <option>Elderly Care</option>
                    <option>Special Needs</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral/40 uppercase tracking-widest mb-2 ml-1">Location</label>
                  <input 
                    type="text" 
                    placeholder="Enter City or Zip"
                    className="w-full p-4 bg-base-200 border-none rounded-2xl text-neutral font-medium placeholder:text-neutral/30 focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>

                <button className="w-full py-2 md:py-5 bg-accent text-white text-lg font-bold rounded-2xl shadow-lg shadow-accent/20 hover:opacity-90 active:scale-[0.98] transition-all mt-6">
                  Search Caregivers
                </button>

                <div className="flex items-center justify-center gap-2 mt-6">
                   <div className="flex -space-x-2">
                     {[1,2,3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-base-300 relative overflow-hidden">
                           <div className="absolute inset-0 bg-primary/10" />
                        </div>
                     ))}
                   </div>
                   <p className="text-xs text-neutral/50">
                     <span className="font-bold text-neutral">48 caregivers</span> online now
                   </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Side with a decorative frame */}
          <div className="relative">
            <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl z-10">
              <Image 
                src="/asset/hold.jpg" 
                alt="Caregiver holding hand of elderly person"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-2xl -z-0" />
          </div>

          {/* Right: Mission Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-primary font-bold uppercase tracking-widest text-sm">
                Our Mission
              </h3>
              <h2 className="text-4xl lg:text-5xl font-bold text-neutral leading-tight">
                Because every family deserves <span className="text-accent italic">peace of mind.</span>
              </h2>
            </div>

            <p className="text-lg text-neutral/70 leading-relaxed">
              At <span className="font-bold text-neutral">We Care</span>, we believe that finding high-quality care shouldn't be a stressful burden. Our platform was born out of a simple need: to connect families with caregivers who treat your loved ones like their own.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h4 className="font-bold text-neutral">Verified Safety</h4>
                <p className="text-sm text-neutral/60">Every caregiver undergoes a rigorous 5-step background check.</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h4 className="font-bold text-neutral">Compassionate Match</h4>
                <p className="text-sm text-neutral/60">We focus on personality and values, not just availability.</p>
              </div>
            </div>
            
            <button className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
              Read our full story
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
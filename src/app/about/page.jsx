import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* 1. EMOTIONAL HERO SECTION */}
      <section className="relative py-24 bg-neutral overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            {/* Using a subtle pattern or zoomed image */}
            <Image 
                src="/asset/family3.jpg" 
                alt="Background" 
                fill 
                className="object-cover grayscale"
            />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            We believe in <span className="text-primary italic">humanity.</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We Care wasn't built in a boardroom. It was built in the living rooms of families 
            who needed a helping hand they could actually trust.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY (The "Full Story" content) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-neutral">Our Founding Story</h2>
            <div className="space-y-4 text-lg text-neutral/70 leading-relaxed">
              <p>
                In 2023, our founder faced a crisis: finding a reliable caregiver for an elderly 
                parent while balancing a full-time job and a newborn. The options were either 
                prohibitively expensive agencies or unverified strangers on the internet.
              </p>
              <p className="font-medium text-neutral italic border-l-4 border-primary pl-6 py-2">
                "There had to be a better way to connect compassionate hearts with the 
                families that need them most."
              </p>
              <p>
                What started as a small local network in Dhaka has grown into a community of 
                thousands. We’ve stayed true to our original mission: ensuring that every 
                child, every senior, and every person recovering from illness receives 
                care that is not just professional, but deeply personal.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl z-10">
              <Image 
                src="/asset/family4.jpg" 
                alt="Our Founder with a family" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-0" />
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES GRID */}
      <section className="py-24 bg-base-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-neutral">The Values That Guide Us</h2>
            <p className="text-neutral/60">We don't just hire caregivers; we build trust.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Radical Transparency", desc: "No hidden fees. No hidden history. Every caregiver is 100% verified.", icon: "🛡️" },
              { title: "Compassion First", desc: "Skills can be taught, but a caring heart is a requirement for our platform.", icon: "❤️" },
              { title: "Safety Always", desc: "Our 5-step NID and background verification is the strictest in the industry.", icon: "✅" }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-base-200">
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-neutral mb-4">{value.title}</h3>
                <p className="text-neutral/60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-24 text-center px-6">
        <div className="max-w-3xl mx-auto bg-primary rounded-[3rem] p-16 text-white shadow-2xl shadow-primary/30">
          <h2 className="text-4xl font-bold mb-6">Ready to find your match?</h2>
          <p className="text-white/80 mb-10 text-lg">Join 5,000+ families who have found peace of mind with We Care.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services" className="bg-white text-primary px-10 py-4 rounded-2xl font-bold hover:bg-base-100 transition-all">
              Browse Services
            </Link>
            <Link href="/register" className="bg-primary-focus border border-white/20 px-10 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
              Join as Caregiver
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
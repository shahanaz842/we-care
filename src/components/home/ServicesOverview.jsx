import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServicesOverview = () => {
  const services = [
    {
      title: "Baby Care",
      description: "Expert childcare providing a safe, nurturing environment for your little ones to grow and play.",
      image: "/asset/reading.jpg", // The child reading photo
      link: "/services/baby-care",
      tag: "Infants & Toddlers"
    },
    {
      title: "Elderly Service",
      description: "Compassionate companionship and daily assistance to help seniors maintain independence at home.",
      image: "/asset/assist.jpg", // The engagement photo
      link: "/services/elderly-care",
      tag: "Senior Support"
    },
    {
      title: "Medical & Sick Care",
      description: "Dedicated support for those recovering from illness or living with chronic conditions.",
      image: "/asset/help.jpg", // The wheelchair/assistance photo
      link: "/services/sick-care",
      tag: "Recovery Support"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Content */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <h3 className="text-primary font-bold uppercase tracking-widest text-sm">
              Our Expertise
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral">
              Tailored care for every <span className="text-accent italic">stage of life.</span>
            </h2>
          </div>
          <Link href="/services" className="hidden md:block text-primary font-bold hover:underline underline-offset-4">
            View All Services &rarr;
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative h-80 w-full rounded-[2.5rem] overflow-hidden mb-6 shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-neutral shadow-sm">
                    {service.tag}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="px-2 space-y-3">
                <h3 className="text-2xl font-bold text-neutral group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral/60 leading-relaxed">
                  {service.description}
                </p>
                <Link href={service.link} className="inline-flex items-center text-primary font-bold text-sm gap-2 pt-2">
                  Learn More 
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
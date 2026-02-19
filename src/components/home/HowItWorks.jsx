import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Search & Filter",
      description: "Enter your zip code and the type of care you need. Filter by experience, ratings, and availability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      ),
      color: "bg-primary/10 text-primary"
    },
    {
      number: "02",
      title: "Meet & Interview",
      description: "Chat with potential caregivers through our secure platform and schedule a free video or in-person interview.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
      ),
      color: "bg-accent/10 text-accent"
    },
    {
      number: "03",
      title: "Book & Pay",
      description: "Once you've found the perfect match, book them securely. Manage schedules and payments all in one place.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
      color: "bg-secondary/10 text-secondary"
    }
  ];

  return (
    <section className="py-24 bg-base-200/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral">
            Simple steps to <span className="text-primary underline decoration-accent/30 underline-offset-8">finding care</span>
          </h2>
          <p className="text-neutral/60 max-w-2xl mx-auto text-lg">
            We’ve streamlined the process so you can focus on what matters most—your family's well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-24 left-[10%] right-[10%] h-[2px] bg-neutral/5 -z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="flex flex-col items-center space-y-6">
                {/* Icon Container */}
                <div className={`w-20 h-20 rounded-3xl ${step.color} flex items-center justify-center shadow-xl transition-transform group-hover:-translate-y-2 duration-300 relative z-10`}>
                  {step.icon}
                  {/* Step Number Badge */}
                  <span className="absolute -top-3 -right-3 w-8 h-8 bg-white border-2 border-base-200 text-neutral font-bold rounded-full flex items-center justify-center text-xs shadow-sm">
                    {step.number}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-neutral">{step.title}</h3>
                  <p className="text-neutral/60 leading-relaxed text-sm lg:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
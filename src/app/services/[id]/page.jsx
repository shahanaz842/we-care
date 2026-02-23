import React from 'react';
import Image from 'next/image';
import { getSingleService } from '@/actions/server/service';


export async function generateMetadata({ params }) {
  const { id } = params;

  const service = await getSingleService(id);

  if (!service) {
    return {
      title: "Service Not Found | We Care",
      description: "The requested service could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const shortDescription =
    service.shortDescription?.slice(0, 160) ||
    service.description?.slice(0, 160);

  return {
    title: `${service.title} | We Care`,
    description: shortDescription,

    keywords: [
      service.title,
      "Caregiver Service",
      "Home Care",
      "Professional Caregiver",
      "Baby Care",
      "Elderly Care",
      "Patient Care",
    ],

    openGraph: {
      title: service.title,
      description: shortDescription,
      url: `https://we-care.vercel.app/services/${service._id}`,
      siteName: "We Care",
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: "en_US",
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: `${service.currency === "USD" ? "$" : "৳"}${
        service.pricingStartingFrom
      }/hr | ${service.rating}⭐ (${service.reviewCount} reviews)`,
      images: [service.image],
    },

    alternates: {
      canonical: `https://we-care.vercel.app/services/${service._id}`,
    },
  };
}

const ServiceDetails = async ({ params }) => {
    const {id} = await params;
    const service = await getSingleService(id);
  if (!service) return null;

  return (
    <div className="min-h-screen bg-base-100 pb-20">
      {/* Header / Breadcrumb Area */}
      <div className="bg-base-200/50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-bold text-primary mb-6 shadow-sm">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            {service.badge}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-neutral mb-4">{service.title}</h1>
          <div className="flex items-center gap-4 text-neutral/60">
             <div className="flex items-center gap-1 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
                </svg>
                <span className="font-bold text-neutral">{service.rating}</span>
             </div>
             <span>•</span>
             <span>{service.reviewCount} Reviews</span>
             <span>•</span>
             <span>{service.availability}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN: Content & Gallery */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Image Gallery Grid */}
            <div className="grid grid-cols-2 gap-4 h-[500px]">
              <div className="relative h-full rounded-[2.5rem] overflow-hidden shadow-lg col-span-2 md:col-span-1">
                <Image src={service.image} alt="Gallery 1" fill className="object-cover" />
              </div>
              <div className="hidden md:grid grid-rows-2 gap-4 h-full">
                <div className="relative rounded-[2rem] overflow-hidden shadow-md">
                  <Image src={service.image2} alt="Gallery 2" fill className="object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-[2rem] overflow-hidden shadow-md">
                    <Image src={service.image3} alt="Gallery 3" fill className="object-cover" />
                  </div>
                  <div className="relative rounded-[2rem] overflow-hidden shadow-md">
                    <Image src={service.image4} alt="Gallery 4" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral">About this service</h2>
              <p className="text-lg text-neutral/70 leading-relaxed">{service.fullDescription}</p>
            </section>

            {/* What's Included */}
            <section className="bg-base-200/30 p-10 rounded-[3rem] border border-base-200">
              <h2 className="text-2xl font-bold text-neutral mb-8">What's included</h2>
              <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                {service.servicesIncluded.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-neutral/80">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral">Common Questions</h2>
              <div className="space-y-4">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="collapse collapse-plus bg-white border border-base-200 rounded-3xl">
                    <input type="radio" name="my-accordion-3" defaultChecked={i === 0} /> 
                    <div className="collapse-title text-xl font-bold text-neutral">
                      {faq.question}
                    </div>
                    <div className="collapse-content text-neutral/60"> 
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: Sticky Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white p-8 rounded-[3rem] shadow-2xl shadow-neutral/10 border border-base-200 space-y-8">
              <div>
                <p className="text-neutral/40 text-sm font-bold uppercase tracking-widest mb-1">Starting from</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-neutral">${service.pricingStartingFrom}</span>
                  <span className="text-neutral/40 font-bold">/ {service.durationOptions[0]}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-base-200 rounded-2xl">
                  <p className="text-xs font-bold text-neutral/40 uppercase mb-1">Ideal For</p>
                  <p className="text-sm font-semibold text-neutral">{service.idealFor.join(", ")}</p>
                </div>
                <div className="p-4 bg-base-200 rounded-2xl">
                  <p className="text-xs font-bold text-neutral/40 uppercase mb-1">Response Time</p>
                  <p className="text-sm font-semibold text-neutral">Usually within 2 hours</p>
                </div>
              </div>

              <button className="w-full py-5 bg-primary text-white text-lg font-bold rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                Book Service Now
              </button>
              
              <p className="text-center text-xs text-neutral/40 px-4">
                No credit card required today. You'll chat with a caregiver first to ensure a perfect match.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
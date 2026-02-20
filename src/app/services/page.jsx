import ServiceCard from '@/components/cards/ServiceCard';
import React from 'react';
// import services from "@/data/services.json";
import { getServices } from '@/actions/server/service';

const ServicesPage = async () => {
    const services = (await getServices()) || [];
    return (
        <div className="min-h-screen bg-base-100">
            {/* 1. Header Section */}
            <div className="bg-base-200/50 py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-neutral mb-6">
                        Professional <span className="text-primary">Care Services</span>
                    </h1>
                    <p className="text-lg text-neutral/60 max-w-2xl mx-auto leading-relaxed">
                        From newborns to seniors, we provide compassionate and verified 
                        caregivers tailored to your family's unique needs.
                    </p>
                </div>
            </div>

            {/* 2. Services Grid */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((item) => (
                        <ServiceCard key={item.slug} service={item} />
                    ))}
                </div>
            </div>

            {/* 3. Simple CTA (Call to Action) */}
            <div className="max-w-5xl mx-auto px-6 pb-24">
                <div className="bg-primary rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-primary/20">
                    <h2 className="text-3xl font-bold mb-4">Don't see what you're looking for?</h2>
                    <p className="text-white/80 mb-8">Contact us for custom care plans tailored to your specific situation.</p>
                    <button className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-base-100 transition-all">
                        Talk to a Care Expert
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative min-h-[70vh] w-full flex items-center overflow-hidden bg-base-100">

            {/* 1. BACKGROUND IMAGE LAYER */}
            <div className="absolute inset-0 z-0">
                <Image
                    // Ensure this matches your file name in /public/asset/
                    src="/asset/family.jpg"
                    alt="Happy multigenerational family walking together"
                    fill
                    className="object-cover object-left lg:object-[25%_center]"
                    priority
                />

                {/* 2. SMART GRADIENT OVERLAY */}
                {/* Fades from solid white on the left to transparent on the right */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:from-white/95 lg:via-white/40" />
            </div>

            {/* 3. CONTENT LAYER */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Value Proposition */}
                    <div className="space-y-8 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Trusted by 5,000+ local families
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-neutral leading-[1.1]">
                            Expert care for your <br />
                            <span className="text-primary">loved ones.</span>
                        </h1>

                        <p className="text-xl text-neutral/80 leading-relaxed max-w-md">
                            From joyful childcare to compassionate elderly support. Find and book verified local caregivers in minutes.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <button className="px-10 py-4 bg-primary text-white text-lg font-bold rounded-2xl shadow-xl shadow-primary/20 hover:bg-secondary transition-all active:scale-95">
                                Get Started
                            </button>
                            <button className="px-10 py-4 bg-white/80 backdrop-blur-md border-2 border-base-300 text-neutral text-lg font-bold rounded-2xl hover:bg-base-200 transition-all">
                                See How It Works
                            </button>
                        </div>
                    </div>

                    {/* Right Side: The Search Card */}
                    {/* <div className="lg:justify-self-end w-full max-w-md">
                        <div className="bg-white/70 p-8 rounded-[2.5rem] shadow-2xl shadow-neutral/10 border border-base-200 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-neutral mb-8 text-center lg:text-left">Find your perfect match</h3>

                            <div className="space-y-5">
                                <div>
                                    <label className="block text-xs font-bold text-neutral/40 uppercase tracking-widest mb-2 ml-1">Service Needed</label>
                                    <select className="w-full p-4 bg-base-200 border-none rounded-2xl text-neutral font-medium focus:ring-2 focus:ring-primary outline-none appearance-none cursor-pointer transition-all">
                                        <option>Child Care</option>
                                        <option>Elderly Care</option>
                                        <option>Special Needs</option>
                                        <option>Pet Sitting</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-neutral/40 uppercase tracking-widest mb-2 ml-1">Location</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Zip Code"
                                        className="w-full p-4 bg-base-200 border-none rounded-2xl text-neutral font-medium placeholder:text-neutral/30 focus:ring-2 focus:ring-primary outline-none transition-all"
                                    />
                                </div>

                                <button className="w-full py-5 bg-accent text-white text-lg font-bold rounded-2xl shadow-lg shadow-accent/20 hover:opacity-90 active:scale-[0.98] transition-all mt-6">
                                    Search Caregivers
                                </button>

                                <div className="flex items-center justify-center gap-2 mt-6">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-base-300 overflow-hidden">
                                                <div className="w-full h-full bg-neutral/10" />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-neutral/50">
                                        <span className="font-bold text-neutral">48 caregivers</span> online now
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>
                {/* Scroll Down Indicator */}
                {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral/40">
                        Explore
                    </span>
                    <div className="w-10 h-10 border-2 border-neutral/20 rounded-full flex justify-center p-1">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce mt-1"></div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Hero;
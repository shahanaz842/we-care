import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import ServicesOverview from "@/components/home/ServicesOverview";
import SuccessAndTestimonials from "@/components/home/SuccessAndTestimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-20">
      <section>
        <Hero></Hero>
      </section>
      <section>
        <About></About>
      </section>
      <section>
        <HowItWorks></HowItWorks>
      </section>
      <section>
        <ServicesOverview></ServicesOverview>
      </section>
      <section>
        <SuccessAndTestimonials></SuccessAndTestimonials>
      </section>

    </div>
  );
}

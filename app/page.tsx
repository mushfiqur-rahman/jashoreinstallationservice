import About from "@/components/About";
import Hero from "@/components/Hero";
import PreviousWork from "@/components/PreviousWork";
import TeamMembers from "@/components/TeamMembers";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <WhyChooseUs />
      <TeamMembers />
      <Testimonials />
      <PreviousWork />
    </div>
  );
}

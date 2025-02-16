import Banner from "@/components/Banner";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import TeamMembers from "@/components/TeamMembers";
import Testimonials from "@/components/Testimonials";
import PreviousWork from "@/components/PreviousWork";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      <About />
      <WhyChooseUs />
      <TeamMembers />
      <Testimonials />
      <PreviousWork />
    </div>
  );
}
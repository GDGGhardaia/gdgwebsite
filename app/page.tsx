import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import Sponsors from "@/components/Sponsors";
import Members from "@/components/Members";
import Events from "@/components/Events";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Divider />
      <Sponsors />
      <Divider />
      <Members />
      <Divider />
      <Events />
      <Divider />
      <CTA />
    </>
  );
}

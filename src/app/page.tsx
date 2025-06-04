
import Hero from "@/components/landing/hero";
import Insights from "@/components/landing/insights";
import FullPageContentSlider from "@/components/landing/slider";
import Success from "@/components/landing/success";
import Technology from "@/components/landing/technology";
import Why from "@/components/landing/why";

export default function Home() {
  return (
    <main className="">
      {/* <Hero /> */}
      <Why />
      <Technology />
      <FullPageContentSlider />
      <Insights />
      <Success />
    </main>
  );
}

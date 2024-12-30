import Hero from "../Components/HeroSection";
import Projects from "../Components/Projects";
import ServicesSection from "../Components/Services";
// import Philosophy from "../Components/Philosphy";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <Projects />
      {/* <Philosophy /> */}
    </>
  );
}

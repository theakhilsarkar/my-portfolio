// File: app/page.js
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Services from "@/components/Service";
import ResumeSection from "@/components/ResumeSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ResumeSection />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

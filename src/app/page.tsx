import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Achievements from "@/components/Achievements";
import Books from "@/components/Books";
import Tedx from "@/components/Tedx";
import Leadership from "@/components/Leadership";
import Advisory from "@/components/Advisory";
import Companies from "@/components/Companies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky header */}
      <Navbar />

      <main className="flex-grow">
        {/* Sections aligned with smooth-scroll anchors */}
        <Hero />
        <About />
        <Journey />
        <Achievements />
        <Books />
        <Tedx />
        <Leadership />
        <Advisory />
        <Companies />
        <Contact />
      </main>

      {/* Footer with branding & credits */}
      <Footer />
    </>
  );
}

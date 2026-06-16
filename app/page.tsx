import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { Scenarios } from "@/components/Scenarios";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { WhyMe } from "@/components/WhyMe";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Industries />
        <Scenarios />
        <About />
        <Process />
        <WhyMe />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

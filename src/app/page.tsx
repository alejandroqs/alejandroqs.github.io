
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

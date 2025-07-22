import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import './App.css'
import { useEffect, useRef, useState } from 'react';
import Navigation from './components/navigation/Navigation';
import Footer from './components/Footer';

function App() {
      const [isScrolled, setIsScrolled] = useState(false);
      const appRef = useRef<HTMLDivElement | null>(null)

  
  useEffect(() => {
    const container = appRef.current
    if (!container) return;

    const handleScroll = () => setIsScrolled(container.scrollTop > 50);

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);
        const sectionRefs = {
    hero: useRef<HTMLDivElement | null>(null),
    about: useRef<HTMLDivElement | null>(null),
    experience: useRef<HTMLDivElement | null>(null),
    projects: useRef<HTMLDivElement | null>(null),
    skills: useRef<HTMLDivElement | null>(null),
    contact: useRef<HTMLDivElement | null>(null),
  }
  const [inViewStates, setinViewStates] = useState({
    hero: false,
    about: false,
    experience: false,
    projects: false,
    skills: false,
    contact: false,
  });

  useEffect(() => {
    const entries = Object.entries(sectionRefs);

    const observer = new IntersectionObserver(
      (entriesList) => {
        setinViewStates((prevStates) => {
          const updatedStates = { ...prevStates };

          entriesList.forEach((entry) => {
            const section = Object.keys(sectionRefs).find(
              (key) =>
                sectionRefs[key as keyof typeof sectionRefs].current ===
                entry.target
            );

            if (
              section &&
              entry.isIntersecting &&
              !prevStates[section as keyof typeof prevStates]
            ) {
              updatedStates[section as keyof typeof updatedStates] = true;
            }
          });

          return updatedStates;
        });
      },
      { threshold: 0.5 }
    );

    entries.forEach(([_, ref]) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      entries.forEach(([_, ref]) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);
  
  
  return (
    <div
      ref={appRef}
      className="w-screen h-screen min-h-screen bg-gray-900 text-white overflow-x-hidden overflow-y-scroll relative z-0"
    >
      <Navigation isScrolled={isScrolled} />
      <div ref={sectionRefs.hero} className=" z-0 relative">
        <HeroSection inView={inViewStates.hero} />
      </div>
      <div ref={sectionRefs.about} className=" z-0 relative">
        <AboutSection inView={inViewStates.about} />
      </div>
      <div ref={sectionRefs.experience} className=" z-0 relative">
        <ExperienceSection inView={inViewStates.experience} />
      </div>
      <div ref={sectionRefs.projects} className=" z-2 relative">
        <ProjectsSection inView={inViewStates.projects} />
      </div>
      <div ref={sectionRefs.skills} className=" z-0 relative">
        <SkillsSection inView={inViewStates.skills} />
      </div>
      <div ref={sectionRefs.contact} className=" z-0 relative">
        <ContactSection inView={inViewStates.contact} />
      </div>

      <Footer/>
    </div>
  );
}

export default App;


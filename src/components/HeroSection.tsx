import { ExternalLink, MessageSquare } from "lucide-react";
import Button from "./ui/Button";
import MyImage from "../assets/my-image.png";
import SlideInText from "./ui/SlideInText";
import { useRef } from "react";

const HeroSection = ({ inView }: { inView: boolean }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 overflow-hidden"
      id="hero"
    >
      <div className="hidden md:block">
        <SlideInText text="Hi!" inView={inView} />
      </div>
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 z-0 flex justify-end">
        <img
          src={MyImage}
          alt="Background"
          className="h-full object-cover object-center opacity-40 "
        />
      </div>

      <div className="z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Frontend{' '}
          <span className="bg-gradient-to-r  text-blue-400">
            Developer
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Building beautiful, functional, and performant web applications with
          3+ years of experience in React, TypeScript, and modern web
          technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => scrollToSection('projects')}>
            View My Work <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch <MessageSquare className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

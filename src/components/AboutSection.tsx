import exp from "constants";
import Section from "./ui/Section";
import Card from "./ui/Card";
import { Code } from "lucide-react";
import SlideInText from "./ui/SlideInText";

const AboutSection = ({ inView }: { inView: boolean }) => {
  return (
    <Section inview={inView}  id="about" title="About Me" >

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm Kehinde Temitayo, a passionate frontend developer with 3 years
            of experience specializing in React. I thrive in challenging
            environments where I can learn, collaborate, and create impactful
            digital experiences.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Currently working full-time at The Alternative Bank, I contribute to
            customer-facing platforms and internal tools. As a self-taught
            developer, I'm constantly evolving my skills and staying updated
            with the latest technologies.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm passionate about building beautiful, functional, and performant
            web applications that make a real difference in people's lives.
          </p>
        </div>
        <Card hover className="text-center">
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
              <Code className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              3+ Years Experience
            </h3>
            <p className="text-gray-400">Building scalable web applications</p>
          </div>
          <div className="space-y-3 text-sm w-full">
            <div className="flex justify-between w-full">
              <span className="text-gray-400 text-left">Performance Improvements</span>
              <span className="text-blue-400 font-semibold text-right">Up to 40%</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="text-gray-400 text-left">Daily Active Users Served</span>
              <span className="text-blue-400 font-semibold text-right">500+</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="text-gray-400 text-left">Uptime Achievement</span>
              <span className="text-blue-400 font-semibold text-right">99.9%</span>
            </div>
          </div>

        </Card>
      </div>
    </Section>
  );
};

export default AboutSection;
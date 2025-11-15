import Section from "./ui/Section";
import Card from "./ui/Card";
import { Code } from "lucide-react";

const SkillsSection = ({ inView }: { inView: boolean }) => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "React Native",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Redux"
      ]
    },
    {
      category: "Backend & Databases",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "PostgreSQL",
        "MongoDB",
        "API Integration"
      ]
    },
    {
      category: "Testing & Quality",
      skills: [
        "Jest",
        "React Testing Library",
        "Cypress",
        "ESLint",
        "Prettier"
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "Vercel",
        "Netlify",
        "Firebase",
        "Postman",
        "Figma",
        "VS Code"
      ]
    }
  ];


  return (
    <Section inview={inView} id="skills" title="Skills & Technologies">
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} hover>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Code className="w-5 h-5 text-blue-400 mr-2" />
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30 hover:border-blue-400 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
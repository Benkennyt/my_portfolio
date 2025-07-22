import Card from "./ui/Card";
import Section from "./ui/Section";

const ExperienceSection = ({ inView }: { inView: boolean }) => {
    const experiences = [
        {
            company: "The Alternative Bank",
            role: "Software Developer – React",
            period: "May 2025 – Present",
            description: "Develop and maintain scalable user interfaces for financial products using React.js and modern frontend tools. Collaborate with designers and backend engineers to deliver accessible, high-performance web experiences.",
            technologies: ["React.js", "TypeScript", "RESTful APIs"]
        },
        {
            company: "ClearerPay",
            role: "Lead Frontend Developer (Contract)",
            period: "October 2024 – May 2025",
            description: "Led complete frontend development of a multi-currency financial platform. Architected and refactored legacy codebase, improving performance by 40% and reducing development time by 25%.",
            technologies: ["Next.js", "TypeScript", "Redux"]
        },
        {
            company: "ByteDigital Technologies",
            role: "Frontend Web Developer",
            period: "July 2024 – May 2025",
            description: "Developed customer-facing and admin interfaces for a telehealth platform serving 1,000+ patients monthly. Built real-time appointment scheduling system and secure authentication flows.",
            technologies: ["React.js", "TypeScript", "Real-time APIs"]
        },
        {
            company: "Teravena",
            role: "Frontend Developer (Intern → Junior)",
            period: "September 2022 – October 2024",
            description: "Developed and maintained responsive web applications for eCommerce and HR platforms. Conducted code reviews and implemented performance optimizations, reducing page load times by 35%.",
            technologies: ["React.js", "JavaScript", "Performance Optimization"]
        }
    ];

    return (
        <Section inview={inView} id="experience" title="Experience">
            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <Card key={index} hover className="relative">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                <h4 className="text-blue-400 font-semibold mb-2">{exp.company}</h4>
                            </div>
                            <span className="text-gray-400 text-sm md:text-right">{exp.period}</span>
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
  };

export default ExperienceSection;

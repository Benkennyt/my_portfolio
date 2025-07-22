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


    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Temitayo Kehinde Resume.pdf'; 
        link.download = 'Temitayo_Kehinde_Resume.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Section inview={inView} id="experience" title="Experience">
            <div className="flex justify-between items-center mb-6">
                <div></div>
                <button
                    onClick={handleDownloadResume}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                </button>
                
            </div>
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

import React, { useState, useEffect } from 'react';
import './Experience.css';

const experiences = [
    {
        company: 'The Alternative Bank',
        role: 'Software Developer – React',
        duration: 'May 2025 – Present',
        points: [
            'Develop and maintain scalable user interfaces for financial products using React.js and modern frontend tools.',
            'Collaborate with designers and backend engineers to deliver accessible, high-performance web experiences.',
            'Integrate frontend with APIs and optimize performance across devices and browsers.',
            'Ensure clean, tested, and version-controlled code within a cross-functional team.',
        ],
    },
    {
        company: 'ClearerPay',
        role: 'Frontend Web Developer',
        duration: 'October 2024 – May 2, 2025',
        points: [
            'Rebuilt and refactored key areas of an inherited Next.js codebase, improving performance, maintainability, and scalability.',
            'Delivered responsive UI components and user flows with React, enhancing usability across multiple devices.',
            'Identified and resolved critical bugs and architectural issues, contributing to faster development cycles.',
            'Applied best practices in state management, API integration, and component reusability to accelerate feature development.',
            'Built and deployed websites for internal projects, contributing beyond the core product.',
        ],
    },
    {
        company: 'ByteDigital Technologies',
        role: 'Frontend Web Developer',
        duration: 'July 2024 – May 5, 2025',
        points: [
            'Worked on a health app, helping develop both the customer-facing and admin-side interfaces.',
            'Collaborated with other frontend developers to build and refine features.',
            'Focused on optimizing UI/UX for seamless user interactions.',
            'Improved code maintainability and performance across the app.',
        ],
    },
    {
        company: 'Teravena',
        role: 'Frontend Developer (Intern → Junior Developer)',
        duration: 'September 2022 – October 2024',
        points: [
            'Developed and maintained responsive web applications.',
            'Conducted code reviews and optimized app performance, reducing load times by 35%.',
            'Enhanced features on a React-based eCommerce store.',
            'Contributed to an HR platform focused on performance tracking and self-service.',
            'Helped build an inventory app with user auth and real-time tracking.',
        ],
    },
];

const Experience = ({ innerRef, activeElement, isToggled }: any) => {
    const [activeTrue, setActiveTrue] = useState(false);
    const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0);

    useEffect(() => {
        if (activeElement === 'experience') {
            setActiveTrue(true);
        }
    }, [activeElement]);

    const handleClassTransition = () => {
        if (!activeTrue) return 'hide';
        return isToggled ? 'slide-in-exp-dark-mode' : 'slide-in-exp';
    };

    const getClass = (base: string) => (isToggled ? `${base}-dark-mode` : base);

    const selected = experiences[selectedCompanyIndex];

    return (
        <div className={getClass('experience')} id="experience" ref={innerRef}>
            <div className={handleClassTransition()}>
                <h1>Experience</h1>
            </div>

            <div className="experience-container">
                        <h2>Places I’ve Worked</h2>
                <div className={getClass('experience-details')}>
                    <div className={getClass('experience-details-1')}>
                        <ul className="company-list">
                            {experiences.map((exp, idx) => (
                                <li
                                    key={exp.company}
                                    className={selectedCompanyIndex === idx ? 'active-company' : ''}
                                    onClick={() => setSelectedCompanyIndex(idx)}
                                >
                                    {exp.company}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={getClass('experience-details-2')}>
                        <h3>{selected.role}</h3>
                        <p className="duration">{selected.duration}</p>
                        <ul className="experience-points">
                            {selected.points.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={getClass('resume')}>
                        <a href="./documents/TEMITAYO KEHINDE frontend resume.pdf" download="resume2023">
                            <button>GET MY RÉSUMÉ</button>
                        </a>
                    </div>
                </div>

                <div className="quote-container">
                    <p className={getClass('quote')}>
                        "All our dreams can come true, if we have the courage to pursue them." — Walt Disney
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Experience;

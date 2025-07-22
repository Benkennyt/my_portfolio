import Section from "./ui/Section";
import { ExternalLink, Play } from "lucide-react";
import { useState } from "react";

const ProjectsSection = ({ inView }: { inView: boolean }) => {
  const [activeMedia, setActiveMedia] = useState<{ [key: number]: number }>({});

  const projects = [
    {
      name: 'ClearerPay Platform',
      description:
        'A multi-currency financial web app for managing digital wallets and cross-border payments. Led the frontend development using React, TypeScript, and Redux. Implemented a clean dashboard, optimized performance by 40%.',
      technologies: [
        'Next.js',
        'TypeScript',
        'Redux',
        'Authentication',
        'Multi-currency APIs',
        'Onboarding',
        'Form Validation',
      ],
      highlights: [
        '40% Performance Improvement',
        '500+ Daily Users',
        '5+ Currencies Supported',
      ],
      externalLink: 'https://clearerpay.com/',
      media: [
        {
          type: 'video',
          alt: 'ClearerPay Platform Dashboard',
          url: 'https://youtu.be/OWzGx99OkK4',
        },
        {
          type: 'image',
          alt: 'clearer desktop View',
          url: '/images/clearer/desktop1.png',
        },
        {
          type: 'image',
          alt: 'clearer desktop View',
          url: '/images/clearer/desktop2.png',
          },
        {
          type: 'image',
          alt: 'clearer mobile View',
          url: '/images/clearer/mobile1.png',
        },
      {
          type: 'image',
          alt: 'clearer mobile View',
          url: '/images/clearer/mobile2.png',
        },
      {
        type: 'image',
        alt: 'clearer mobile View',
        url: '/images/clearer/mobile3.png',
      },
      {
        type: 'image',
        alt: 'clearer mobile View',
        url: '/images/clearer/mobile4.png',
      },
      {
        type: 'image',
        alt: 'clearer mobile View',
        url: '/images/clearer/mobile5.png',
      },
      ],
    },
    {
      name: 'HajjSavings Dashboard',
      description:
        'An admin dashboard built for The Alternative Bank for managing savings products and users. Developed using React, Redux, and Tailwind CSS with seamless backend integration.',
      technologies: [
        'React',
        'React Query',
        'Tailwind CSS',
        'API Integration',
        'Form Validation',
        'Authentication',
        'Charts',
      ],
      highlights: ['Admin Dashboard', 'User Management', 'Savings Products'],
      media: [
        {
          type: 'image',
          alt: 'HajjSavings Dashboard Demo',
          url: '/images/hajjsavings/hajjsavings.png',
        },
      ],
    },
    {
      name: 'Health Checker Web App',
      description:
        'A comprehensive web application that allows users to request home test kits and receive health consultations. Built with React and Node.js featuring form validation and dynamic routing.',
      technologies: [
        'React',
        'Redux',
        'Authentication',
        'Calendar',
        'API Integration',
        'Form Validation',
      ],
      highlights: [
        '1000+ Patients Monthly',
        'Real-time Scheduling',
        'Secure Authentication',
      ],
      media: [
        {
          type: 'image',
          alt: 'Health Checker Web App Interface',
          url: '/images/healthchecker/healthchecker1.png',
        },
        {
          type: 'image',
          alt: 'Health Checker Mobile App',
          url: '/images/healthchecker/healthchecker2.png',
        },
        {
          type: 'image',
          alt: 'Health Checker Dashboard',
          url: '/images/healthchecker/healthchecker3.png',
        },
      ],
    },
    {
      name: 'Frirosa Website',
      description:
        'A professional brochure website for a bureau de change company. Built with HTML, CSS, and JavaScript, featuring customer contact forms and fully responsive design.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      highlights: ['Brochure Site', 'Contact Forms', 'Mobile Responsive'],
      externalLink: 'https://frirosa.com/',
      media: [
        {
          type: 'video',
          alt: 'Frirosa Website Homepage',
          url: 'https://youtu.be/70drl9tRIPc',
        },
        {
          type: 'image',
          alt: 'Frirosa Desktop View',
          url: '/images/frirosa/desktop1.png',
        },
        {
          type: 'image',
          alt: 'Frirosa Desktop View',
          url: '/images/frirosa/desktop2.png',
        },
        {
          type: 'image',
          alt: 'Frirosa mobile View',
          url: '/images/frirosa/mobile2.png',
        },
        {
          type: 'image',
          alt: 'Frirosa mobile View',
          url: '/images/frirosa/mobile3.png',
        },
        {
          type: 'image',
          alt: 'Frirosa mobile View',
          url: '/images/frirosa/mobile4.png',
        },
        {
          type: 'image',
          alt: 'Frirosa mobile View',
          url: '/images/frirosa/mobile5.png',
        },
      ],
    },
  ];

  const handleMediaSelect = (projectIndex: number, mediaIndex: number) => {
    setActiveMedia(prev => ({
      ...prev,
      [projectIndex]: mediaIndex
    }));
  };

  const getEmbedUrl = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&\n?#]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  return (
    <Section inview={inView} id="projects" title="Featured Projects">
      <div className="space-y-20">
        {projects.map((project, projectIndex) => {
          const currentMediaIndex = activeMedia[projectIndex] || 0;
          const currentMedia = project.media[currentMediaIndex];

          return (
            <div
              key={projectIndex}
              className={`flex flex-col lg:flex-row gap-8 items-start ${
                projectIndex % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full lg:w-1/2 space-y-4flex flex-col justify-between">
                <div className="relative bg-transparent rounded-lg overflow-hidden ">
                  <div
                    className={`${
                      currentMedia?.type === 'image'
                        ? 'h-[380px]'
                        : 'aspect-video'
                    } w-full bg-transparent rounded-lg overflow-hidden`}
                  >
                    {currentMedia?.type === 'video' &&
                    currentMedia.url.includes('youtu') ? (
                      <iframe
                        src={getEmbedUrl(currentMedia.url)}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={currentMedia.alt}
                      />
                    ) : currentMedia?.type === 'video' ? (
                      <video
                        src={currentMedia.url}
                        controls
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={currentMedia?.url}
                        alt={currentMedia?.alt}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                </div>

                <div className="w-full overflow-x-auto overflow-y-hidden p-3">
                  {project.media.length > 1 && (
                    <div className=" w-fit flex gap-3 justify-center ">
                      {project.media.map((mediaItem, mediaIndex) => (
                        <button
                          key={mediaIndex}
                          onClick={() =>
                            handleMediaSelect(projectIndex, mediaIndex)
                          }
                          className={`relative w-20 h-12 flex-shrink-0 rounded-md overflow-hidden transition-all duration-200 ${
                            currentMediaIndex === mediaIndex
                              ? 'ring-2 ring-blue-400 scale-105'
                              : 'opacity-60 hover:opacity-80'
                          }`}
                        >
                          {mediaItem.type === 'video' ? (
                            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                              <Play className="w-4 h-4 text-white" />
                            </div>
                          ) : (
                            <img
                              src={mediaItem.url}
                              alt={mediaItem.alt}
                              className="w-full h-full object-contain"
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-white">
                      {project.name}
                    </h3>
                    {project.externalLink && (
                      <a
                        href={project.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
                        title="View Live Site"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-200">
                    Key Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.highlights.map((highlight, hIndex) => (
                      <div
                        key={hIndex}
                        className="flex items-center space-x-3 bg-gray-800/30 rounded-lg p-3"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                        <span className="text-blue-300 font-medium">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-200">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 rounded-full text-sm font-medium border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default ProjectsSection;
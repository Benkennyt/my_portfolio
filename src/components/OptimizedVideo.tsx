import { useState } from 'react';

interface Project {
    media: {
        src: string;
    };
}

interface YouTubeIframeProps {
    project: Project;
    setIsExpanded: (index: boolean) => void;
    isExpanded: boolean;
    className?: string;
}

const YouTubeIframe: React.FC<YouTubeIframeProps> = ({
    project,
    setIsExpanded,
    isExpanded,
    className = ""
}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const getEmbedUrl = (url: string): string => {
        const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&\n?#]+)/);
        const videoId = videoIdMatch ? videoIdMatch[1] : '';
        return `https://www.youtube.com/embed/${videoId}`;
    };


    const handleMouseEnter = (): void => {
        setIsHovered(true);
    };

    const handleMouseLeave = (): void => {
        setIsHovered(false);
    };

    const toggleExpanded = (e: React.MouseEvent): void => {
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            className={`transition-all duration-300 ease-in-out relative ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={toggleExpanded}
        >
            <iframe
                src={getEmbedUrl(project.media.src)}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                
                className="w-full h-full rounded-lg shadow-2xl cursor-pointer"
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
};

export default YouTubeIframe;
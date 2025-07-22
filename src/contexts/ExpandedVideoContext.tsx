// ExpandedVideoContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

interface ExpandedVideoContextType {
    isExpanded: boolean;
    setIsExpanded: (val: boolean) => void;
}

const ExpandedVideoContext = createContext<ExpandedVideoContextType | undefined>(undefined);

export const ExpandedVideoProvider = ({ children }: { children: ReactNode }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return (
        <ExpandedVideoContext.Provider value={{ isExpanded, setIsExpanded }}>
            {children}
        </ExpandedVideoContext.Provider>
    );
};

export const useExpandedVideo = () => {
    const context = useContext(ExpandedVideoContext);
    if (!context) {
        throw new Error('useExpandedVideo must be used within an ExpandedVideoProvider');
    }
    return context;
};

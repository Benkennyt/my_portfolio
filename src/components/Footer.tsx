import { ChevronDown } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const Footer = () => {
  const [isVersionDropdownOpen, setIsVersionDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsVersionDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (event: { key: string }) => {
      if (event.key === 'Escape') {
        setIsVersionDropdownOpen(false);
      }
    };

    if (isVersionDropdownOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isVersionDropdownOpen]);

  const versions = [
    { version: 'v1', url: ' https://kehindetemitayo-v1.vercel.app' },
  ];

  return (
    <footer className=" ">
      <div className="w-full flex flex-col md:flex-row items-center gap-2 p-8 ">
              <h4 className="text-white font-semibold  ml-auto">Versions:</h4>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsVersionDropdownOpen(!isVersionDropdownOpen)}
            className="w-fit bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600 rounded-lg px-4 py-2 text-left text-gray-300 transition-colors duration-200 flex items-center justify-between"
          >
            
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isVersionDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {isVersionDropdownOpen && (
            <div className="absolute bottom-full left-0 w-full mb-2 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden">
              <ul className="divide-y divide-gray-700">
                {versions.map((version) => (
                  <li key={version.version}>
                    <a
                      href={version.url}
                      onClick={() => setIsVersionDropdownOpen(false)}
                      className="block w-full px-5 py-3 text-sm text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none transition-colors duration-150"
                    >
                      {version.version}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="bg-gray-800/50 border-t border-gray-700 p-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Kehinde Temitayo. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

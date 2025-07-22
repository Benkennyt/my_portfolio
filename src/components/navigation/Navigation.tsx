import { useExpandedVideo } from '../../contexts/ExpandedVideoContext';

const Navigation = ({ isScrolled }: { isScrolled: boolean }) => {
  const { isExpanded } = useExpandedVideo();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav
      className={` sticky top-0 w-full ${
        isExpanded ? 'z-0' : 'z-50'
      } transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div onClick={() => scrollToSection('hero')} className="cursor-pointer text-2xl font-bold  text-blue-400">
            Kehinde Temitayo
          </div>
          <div className="hidden md:flex space-x-8">
            {['about', 'experience', 'projects', 'skills', 'contact'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 capitalize font-medium "
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
  
export default Navigation;
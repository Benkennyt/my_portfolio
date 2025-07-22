interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  inview: boolean;
}

const Section = ({ id, title, children, className = '', inview }: SectionProps) => {
  return (
    <section  id={id} className={`py-20 ${className} relative z-0  `}>
      {/* <SlideInText text={title} inView={inview} /> */}

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  inview: boolean;
}

const Section = ({ id, title, children, className = '' }: SectionProps) => {
  return (
    <section  id={id} className={`py-20 ${className} relative z-0  `}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center bg-gradient-to-r ">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
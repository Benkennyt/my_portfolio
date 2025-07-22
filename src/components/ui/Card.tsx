import exp from "constants";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '', hover = false, ...props }: CardProps) => {
    return (
        <div
            className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 ${hover ? 'hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20' : ''} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
  };

  export default Card;
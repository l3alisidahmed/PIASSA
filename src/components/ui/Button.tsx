import * as motion from "motion/react-client";

interface ButtonProps {
    title: string;
    icon: React.ReactNode;
    bgColor?: string;
    padding?: string;
    onClick: () => void;
}

const Button : React.FC<ButtonProps> = ({title, icon, bgColor, padding, onClick}) => {
    return (
        <motion.button 
            whileHover={{ scale: 1.1 }}
            className={`flex flex-row items-center gap-2 ${!bgColor ? 'bg-[#FF3D00]' : bgColor} ${!padding ? 'p-2' : padding} rounded-md shadow-lg cursor-pointer`} 
            onClick={onClick}
        >
            <p>{title}</p>
            {icon}
        </motion.button>
    );
}

export default Button;
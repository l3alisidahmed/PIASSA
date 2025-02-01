interface ButtonProps {
    title: string;
    icon: React.ReactNode;
    bgColor?: string;
    padding?: string;
    onClick: () => void;
}

const Button : React.FC<ButtonProps> = ({title, icon, bgColor, padding, onClick}) => {
    return (
        <button 
            className={`flex flex-row items-center gap-2 ${!bgColor ? 'bg-[#FF3D00]' : bgColor} ${!padding ? 'p-2' : padding} rounded-md`} 
            onClick={onClick}
        >
            <p>{title}</p>
            {icon}
        </button>
    );
}

export default Button;
import React, { FC } from 'react';

interface IconCardProps {
    icon?: React.ReactNode;
    bgColor?: string;
    rounded?: String;
    opacity?: string;
    onClick?: () => void;
}

const IconCard : FC<IconCardProps> = ({icon, bgColor, rounded, opacity, onClick}) => {
    return (
        <div 
            className={`w-50 h-50 backdrop-blur-md bg-white/5 flex flex-col items-center justify-center p-2 ${rounded || 'rounded-lg'} ${opacity || 'opacity-100'}`} 
            style={{ backgroundColor: bgColor || 'transparent' }}
            onClick={onClick}
        >
            {icon? icon : null}
        </div>
    );
}

export default IconCard;
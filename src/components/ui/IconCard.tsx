import React, { FC } from 'react';

interface IconCardProps {
    icon: React.ReactNode;
    bgColor?: string;
    rounded?: String;
}

const IconCard : FC<IconCardProps> = ({icon, bgColor, rounded}) => {
    return (
        <div className={`w-50 h-50 backdrop-blur-md bg-white/5 flex flex-col items-center justify-center p-2 ${rounded || 'rounded-lg'}`} style={{ backgroundColor: bgColor || 'transparent' }}>
            {icon}
        </div>
    );
}

export default IconCard;
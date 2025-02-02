import React, { FC, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface IconCardProps {
    icon?: React.ReactNode;
    bgColor?: string;
    rounded?: string;
    opacity?: string;
    onClick?: () => void;
}

const IconCard : FC<IconCardProps> = ({icon, bgColor, rounded, opacity, onClick}) => {

    const iconButtonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        iconButtonRef.current?.addEventListener('click', () => {
            const className = iconButtonRef.current?.attributes[0].value.split(' ')[0];
            if (className) {
                document.querySelectorAll(`.${className}`).forEach((element) => {
                    const TogleTopIconButton = element.attributes[0].value.includes('rounded-t-full') && element;
                    const TogleBottomIconButton = element.attributes[0].value.includes('rounded-b-full') && element;
                    if (element !== iconButtonRef.current && element !== TogleTopIconButton && element !== TogleBottomIconButton) {
                        (element as HTMLElement).style.backgroundColor = 'transparent';
                    } else {
                        if (iconButtonRef.current) {
                            iconButtonRef.current.style.backgroundColor = '#FF3D00';;
                        }
                    }
                });
            }
        });
    }, []);

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            className={`icon-button w-50 h-50 backdrop-blur-md bg-white/5 flex flex-col items-center justify-center p-2 ${rounded || 'rounded-lg'} ${opacity || 'opacity-100'} cursor-pointer`} 
            style={{ backgroundColor: bgColor || 'transparent' }}
            onClick={onClick}
            ref={iconButtonRef}
        >
            {icon? icon : null}
        </motion.div>
    );
}

export default IconCard;
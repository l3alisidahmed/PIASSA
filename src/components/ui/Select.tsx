'use client';

import React, { useRef, useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";

interface SelectProps {
    title: string;
    options: string[];
    isDisabled?: boolean;
    bgColor?: string;
    borderColor?: string;
    borderWidth?: string;
    borderStyle?: string;
    width?: string;
    zIndex?: string;
    textColor?: string;
    shadow?: string;
    onSelect? : (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

const Select : React.FC<SelectProps> = ({
        title, 
        options, 
        isDisabled, 
        width, 
        bgColor, 
        borderWidth, 
        borderStyle, 
        borderColor, 
        zIndex,
        textColor,
        shadow,
        onSelect
    }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    
    const dropDownRef = useRef<HTMLDivElement>(null);

    const handleSelect = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, option: string) => {
        if(onSelect) onSelect(e);
        setSelectedOption(option);
        setIsOpen(false);
    }

    return (
        <div className={`relative ${width || 'w-[200px]'} ${zIndex}`} ref={dropDownRef}>
            <button 
                className={`
                    w-full 
                    flex 
                    flex-row 
                    justify-between 
                    items-center 
                    gap-2 
                    ${isOpen ? 'bg-white/60' : isDisabled ? bgColor : 'bg-black/15'} 
                    p-2 
                    ${isOpen ? 'rounded-t-md' : 'rounded-md'} 
                    ${borderWidth} 
                    ${borderStyle} 
                    ${borderColor} 
                    ${shadow} 
                    cursor-pointer
                `} 
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup='listbox'
                aria-expanded={isOpen}
            >
                {isDisabled ? null : <MapPin size={16} />}
                <p className={textColor}>{selectedOption ? selectedOption : title}</p>
                <ChevronDown size={16} className={`${textColor} transition-transform ${isOpen ? 'transform rotate-180' : null}`} />
            </button>
            {isOpen && ( 
                <div className="absolute w-full z-10 bg-white/60 shadow-lg rounded-b-md">
                    <ul role="listbox" tabIndex={0}>
                        {options.map((option, index) => (
                            <li 
                                key={index} 
                                className="p-3 hover:bg-[#FF3D00]"
                                onClick={(e) => {handleSelect(e,option)}}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Select;
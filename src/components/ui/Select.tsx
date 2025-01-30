'use client';

import React, { useRef, useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";

interface SelectProps {
    title: string;
    options: String[];
}

const Select : React.FC<SelectProps> = ({title, options}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<String | null>(null);
    
    const dropDownRef = useRef<HTMLDivElement>(null);

    const handleSelect = (option: String) => {
        setSelectedOption(option);
        setIsOpen(false);
    }

    return (
        <div className="relative w-[200px]" ref={dropDownRef}>
            <button 
                className={`w-full flex flex-row justify-around items-center gap-2 ${isOpen ? 'bg-white/60' : 'bg-black/15'} p-2 ${isOpen ? 'rounded-t-md' : 'rounded-md'}`} 
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup='listbox'
                aria-expanded={isOpen}
            >
                <MapPin size={16} />
                <p>{selectedOption ? selectedOption : title}</p>
                <ChevronDown size={16} className={`transition-transform ${isOpen ? 'transform rotate-180' : null}`} />
            </button>
            {isOpen && ( 
                <div className="absolute w-full z-10 bg-white/60 shadow-lg rounded-b-md">
                    <ul role="listbox" tabIndex={0}>
                        {options.map((option, index) => (
                            <li 
                                key={index} 
                                className="p-3 hover:bg-[#FF3D00]" 
                                onClick={() => handleSelect(option)}
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
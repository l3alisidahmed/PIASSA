'use client';

import React, { useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import IconCard from "./IconCard";

interface DataRowProps {
    data: any[];
}

const DataRow : React.FC<DataRowProps> = ({ data }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClicked = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="flex flex-col gap-5">
            {data.map((row, index) => (
                <div key={index} className={`grid grid-cols-[1fr_100px] gap-5`}>
                    <div className="w-full p-5 flex flex-row justify-between items-center bg-white text-black">
                        <div className="flex flex-col gap-2 justify-start">
                            <p>{row.name}</p>
                            <p>{row.email}</p>
                        </div>
                        <div className="flex flex-col gap-2 justify-start">
                            <p>Wilaya</p>
                            <p>{row.wilaya}</p>
                        </div>
                        <div className="flex flex-col gap-2 justify-start">
                            {Array.isArray(row.phone) ? row.phone.map((phone:any, index:any) => (
                                <p key={index}>{phone}</p>
                            )) : <p>{row.phone}</p>}
                        </div>
                        <div className="flex flex-col gap-2 justify-start">
                            <p>{row.startDate}</p>
                        </div>
                        <div className="flex flex-col gap-2 justify-start">
                            <p>{row.store.name}</p>
                            <p>{row.store.id}</p>
                        </div>
                        <div className="text-center text-green-500">
                            <p>{row.status}</p>
                        </div>
                        <div>
                            {row.speciality}
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center w-20">
                        <IconCard icon={<ChevronRight size={30} />} bgColor="rgba(255, 255, 255, 0.3)" onClick={() => handleClicked()} />
                        {isOpen ? (
                            <div className="flex flex-row gap-2">
                                <IconCard icon={<ChevronRight size={30} />} bgColor="rgba(255, 255, 255, 0.3)" />
                                <IconCard icon={<ChevronRight size={30} />} bgColor="rgba(255, 255, 255, 0.3)" />
                                <IconCard icon={<ChevronRight size={30} />} bgColor="rgba(255, 255, 255, 0.3)" />
                            </div>
                        ) : null}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DataRow;
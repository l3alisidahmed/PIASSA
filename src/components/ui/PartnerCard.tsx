'use client';

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import IconCard from "./IconCard";
import Select from "./Select";



const PartnerCard = ({ partner, partnerKey }: { partnerKey?: any, partner: any }) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const handleClicked = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <div key={partnerKey} className={`grid grid-cols-[1fr_100px] gap-5`}>
            <div className="w-full p-5 flex flex-partner justify-between items-center bg-white text-black">
                <div className="flex flex-col gap-2 justify-start">
                    <p>{partner.name}</p>
                    <p>{partner.email}</p>
                </div>
                <div className="flex flex-col gap-2 justify-start">
                    <p>Wilaya</p>
                    <p>{partner.wilaya}</p>
                </div>
                <div className="flex flex-col gap-2 justify-start">
                    {partner.phone.map((phone:any, index:any) => (
                        <p key={index}>{phone}</p>
                    ))}
                </div>
                <div className="flex flex-col gap-2 justify-start">
                    <p>{partner.startDate}</p>
                </div>
                <div className="flex flex-col gap-2 justify-start">
                    <p>{partner.store.name}</p>
                    <p>{partner.store.id}</p>
                </div>
                <div className="text-center text-green-500">
                    <p>{partner.status}</p>
                </div>
                <div>
                    <Select key="data-select-key" title={partner.speciality} isDisabled={true} width="w-[130px]" bgColor="bg-transparent" borderWidth="border" borderStyle="border-solid" borderColor="border-black" options={["speciality 1", "speciality 2", "speciality 3"]} zIndex={"z-0"}/>,
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
    );
}

export default PartnerCard;
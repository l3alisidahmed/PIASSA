'use client';

import { useRef, useState } from "react";
import { ChevronRight, Pencil, Eye, Trash2, ChevronLeft} from "lucide-react";
import IconCard from "./IconCard";
import Select from "./Select";
import Edit from "./Edit";
import View from "./View";
import Delete from "./Delete";
import * as motion from "motion/react-client";
import ExitAnimation from "./ExitAnimation";
import { PartnerType } from "@/providers/FormProvider";


const PartnerCard = ({ partner, partnerKey }: { partnerKey?:string | number, partner: PartnerType }) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [view, setView] = useState(false);
    const [remove, setRemove] = useState(false);

    const dropDownRef = useRef<HTMLDivElement>(null);

    const handleClicked = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <>
            <div key={partnerKey} className={`relative grid ${isOpen ? 'grid-cols-[1fr_250px] right-20' : 'grid-cols-[1fr_100px]'} gap-5`}>
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
                        {partner.phone.map((phone:string, index:number) => (
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
                <div className="relative w-full flex flex-row items-center" ref={dropDownRef}>
                    <button onClick={() => handleClicked()} aria-haspopup='listbox' aria-expanded={isOpen}>
                        <IconCard icon={isOpen ? <ChevronLeft size={30}/> : <ChevronRight size={30} />} bgColor="rgba(255, 255, 255, 0.3)" />
                    </button>
                    {isOpen ? (
                        <motion.div initial={{x: -150 }} animate={{x:0}} transition={{stiffness: 120}} exit={{x:100}} className="absolute right-10 flex flex-row gap-2">
                            <IconCard icon={<Pencil size={30} />} bgColor="rgba(255, 255, 255, 0.3)" onClick={() => {setEdit(!edit);setRemove(false);setView(false);}} />
                            <IconCard icon={<Eye size={30} />} bgColor="rgba(255, 255, 255, 0.3)" onClick={() => {setView(!view);setRemove(false);setEdit(false);}} />
                            <IconCard icon={<Trash2 size={30} />} bgColor="rgba(255, 255, 255, 0.3)" onClick={() => {setRemove(!remove);setEdit(false);setView(false);}} />
                        </motion.div>
                    ) : null}
                </div>
            </div>
            {view && 
                <ExitAnimation>
                    <View />
                </ExitAnimation>
            }
            {edit &&
                <ExitAnimation> 
                    <Edit onClose={() => setEdit(false)} />
                </ExitAnimation>
            }
            {remove &&
                <Delete remove={remove} onClose={() => setRemove(false)} />
            }
        </>
    );
}

export default PartnerCard;
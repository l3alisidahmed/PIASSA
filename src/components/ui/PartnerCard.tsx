'use client';

import { useEffect, useRef, useState } from "react";
import { ChevronRight, Pencil, Eye, Trash2} from "lucide-react";
import IconCard from "./IconCard";
import Select from "./Select";
import Edit from "./Edit";
import View from "./View";
import Delete from "./Delete";
import * as motion from "motion/react-client";
import ExitAnimation from "./ExitAnimation";
import { PartnerType } from "@/providers/FormProvider";
import { useUpdate } from "@/providers/UpdateProvider";


const PartnerCard = ({ partner, partnerKey }: { partnerKey?: number, partner: PartnerType }) => {

    const { 
        setElementID, 
        getDataByID, 
        edit, 
        setEdit, 
        view, 
        setView, 
        remove, 
        setRemove 
    } = useUpdate();

    const [isOpen, setIsOpen] = useState(false);
    
    const dropDownRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const id = dropDownRef.current?.parentElement?.id ?? '';
        setElementID(id);
    }, [isOpen])

    const handleClicked = () => {
        setIsOpen(!isOpen);
    }

    const handleEditClicked = () => {
        setEdit(!edit);
        setRemove(false);
        setView(false);
        if (edit) {
            getDataByID();
        }
    }

    const handleViewClicked = () => {
        setView(!view);
        setRemove(false);
        setEdit(false);
    }

    const handleRemoveClicked = () => {
        setRemove(!remove);
        setEdit(false);
        setView(false);
    }
    
    return (
        <>
            <div id={`${partnerKey}`} className={`relative grid ${isOpen ? 'grid-cols-[1fr_250px] right-20' : 'grid-cols-[1fr_100px]'} gap-5`}>
                <div className="w-full p-5 flex flex-partner justify-between items-center bg-white text-black">
                    <div className="flex flex-col gap-2 justify-start">
                        <p id="name">{partner.name}</p>
                        <p id="email">{partner.email}</p>
                    </div>
                    <div className="flex flex-col gap-2 justify-start">
                        <p>Wilaya</p>
                        <p id="wilaya">{partner.wilaya}</p>
                    </div>
                    <div className="flex flex-col gap-2 justify-start">
                        {partner.phone.map((phone:string, index:number) => (
                            <p key={index} id={`phone_${index + 1}`}>{phone}</p>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2 justify-start">
                        <p id="startDate">{partner.startDate}</p>
                    </div>
                    <div className="flex flex-col gap-2 justify-start">
                        <p id="storeName">{partner.store.name}</p>
                        <p id="storeID">{partner.store.id}</p>
                    </div>
                    <div className="text-center text-green-500">
                        <p id="status">{partner.status}</p>
                    </div>
                    <div>
                        <Select key="data-select-key" title={partner.speciality} isDisabled={true} width="w-[130px]" bgColor="bg-transparent" borderWidth="border" borderStyle="border-solid" borderColor="border-black" options={["speciality 1", "speciality 2", "speciality 3"]} zIndex={"z-1"}/>
                    </div>
                </div>
                <div className="relative w-full flex flex-row items-center" ref={dropDownRef}>
                    <button onClick={() => handleClicked()} aria-haspopup='listbox' aria-expanded={isOpen}>
                        <IconCard icon={<ChevronRight size={30} className={`transition-transform ${isOpen ? 'transform rotate-180' : null}`} />} bgColor="rgba(255, 255, 255, 0.3)" />
                    </button>
                    {isOpen ? (
                        <motion.div initial={{x: -150 }} animate={{x:0}} transition={{stiffness: 120}} exit={{x:100}} className="absolute right-10 flex flex-row gap-2">
                            <IconCard icon={<Pencil size={30} />} bgColor="rgba(255, 255, 255, 0.3)" onClick={handleEditClicked} />
                            <IconCard icon={<Eye size={30} />} bgColor="rgba(255, 255, 255, 0.3)" onClick={handleViewClicked} />
                            <IconCard icon={<Trash2 size={30} />} bgColor="rgba(255, 255, 255, 0.3)" onClick={handleRemoveClicked} />
                        </motion.div>
                    ) : null}
                </div>
            </div>
            {(view && isOpen) && 
                <ExitAnimation>
                    <View />
                </ExitAnimation>
            }
            {(edit && isOpen) &&
                <ExitAnimation> 
                    <Edit onClose={() => setEdit(false)}/>
                </ExitAnimation>
            }
            {(remove && isOpen) &&
                <Delete remove={remove} onClose={() => setRemove(false)} />
            }
        </>
    );
}

export default PartnerCard;
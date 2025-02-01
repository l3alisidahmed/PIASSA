'use client';

import { useState } from "react";
import IconCard from "../ui/IconCard";
import Logo from "../ui/Logo";
import {Handshake, LayoutDashboard, Car, Settings, TvMinimal, Minus, Power, Icon} from "lucide-react";

export default function Sidebar() {

    const [handIconClicked, setHandIconClicked] = useState(true);
    const [tvIconClicked, setTvIconClicked] = useState(false);

    return (
        <div className="bg-white/20 flex flex-col items-center gap-10 p-20">
            <Logo />

            <div className="backdrop-blur-md bg-white/10 flex flex-col items-center justify-center p-2 rounded-full">
                <IconCard 
                    icon={<Handshake size={30} onClick={() => {setHandIconClicked(true); setTvIconClicked(false)}} />} 
                    bgColor={handIconClicked ? '#FF3D00' : undefined} 
                    rounded='rounded-t-full' 
                />
                <IconCard 
                    icon={<TvMinimal size={30} onClick={() => {setTvIconClicked(true); setHandIconClicked(false)}} />} 
                    bgColor={tvIconClicked ? '#FF3D00' : undefined} 
                    rounded='rounded-b-full' 
                />
            </div>

            {handIconClicked ? 
                <div className="flex flex-col items-center gap-5">
                    <div className="h-0.5 w-5 bg-[#FF3D00]"></div>
                    <IconCard icon={<Handshake size={30} />} bgColor={handIconClicked ? '#FF3D00' : undefined} />
                    <IconCard icon={<LayoutDashboard size={30} />} />
                    <IconCard icon={<Car size={30} />} />
                    <IconCard icon={<Settings size={30} />} />
                    <div className="h-0.5 w-5 bg-[#FF3D00]"></div>
                </div>
            : null}

            <IconCard icon={<Power size={30} />} />
        </div>
    );
}
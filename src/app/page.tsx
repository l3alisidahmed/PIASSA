'use client';

import Button from "@/components/ui/Button";
import Table from "@/components/ui/Table";
import TopBar from "@/components/ui/TopBar";
import { Plus } from "lucide-react";
import { data } from "@/components/data";
import IconCard from "@/components/ui/IconCard";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-[1fr_100px] gap-5">
        <div>
          <TopBar />
          <div className="w-full p-5 flex flex-row justify-end">
            <Button 
              title="Ajouter Nouvel Partners" 
              icon={<Plus size={30} />} 
              bgColor="bg-[#FF3D00]" 
              onClick={() => console.log("Button Clicked")} 
            />
          </div>
        </div>
        <div>
          <IconCard opacity="opacity-0" />
        </div>
      </div>
      <Table data={data} />
    </div>
  );
}

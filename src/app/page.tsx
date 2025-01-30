'use client';

import Button from "@/components/ui/Button";
import TopBar from "@/components/ui/TopBar";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <TopBar />
      <div className="w-full p-5 flex flex-row justify-end">
        <Button 
          title="Ajouter Nouvel Partners" 
          icon={<Plus size={30} />} 
          bgColor="bg-red-500" 
          onClick={() => console.log("Button Clicked")} 
        />
      </div>
    </div>
  );
}

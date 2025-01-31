'use client';

import Button from "@/components/ui/Button";
import Table from "@/components/ui/Table";
import TopBar from "@/components/ui/TopBar";
import { Plus } from "lucide-react";
import IconCard from "@/components/ui/IconCard";
import { useState } from "react";
import Modal from "@/components/ui/Modal";


export default function Home() {

  const [showModal, setShowModal] = useState(false);

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
              onClick={() => setShowModal(true)} 
            />
          </div>
          <Modal showModal={showModal} onClose={() => setShowModal(false)}/>
        </div>
        <div>
          <IconCard opacity="opacity-0" />
        </div>
      </div>
      <Table />
    </div>
  );
}

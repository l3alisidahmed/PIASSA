import React from "react";
import Modal from "./Modal";
import { CircleHelp } from "lucide-react";

interface DeleteProps {
    remove: boolean;
    onClose: () => void;
}

const Delete: React.FC<DeleteProps> = ({remove, onClose}) => {
    return (
        <Modal showModal={remove} onClose={onClose}>
            <div className="w-[250px] flex flex-col gap-5 pt-10 p-5 bg-white/80 backdrop-blur-[60px] text-black rounded-lg">
                <div className="flex flex-col justify-center items-center gap-2">
                    <CircleHelp size={50} color="#FF3D00" />
                </div>
                <div className="text-center">
                    <h2>Are you sure do you want to delete?</h2>
                    <p>Please do not close this page</p>
                </div>
                <div className="flex flex-row gap-4 justify-center items-center">
                    <button className="bg-transparent text-[#FF3D00] border border-solid border-[#FF3D00] px-4 py-2 rounded-md" onClick={() => console.log('Remove')}>Yes</button>
                    <button className="bg-gray-400/50 text-white px-4 py-2 rounded-md" onClick={onClose}>No</button>
                </div>
            </div>
        </Modal>
    );
}

export default Delete;
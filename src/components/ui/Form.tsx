'use client';

import { useState } from "react";
import FormInput from "./FormInput";
import Select from "./Select";
import { ToggleLeft, ToggleRight } from "lucide-react";

const Form = ({onClose} : {onClose: () => void}) => {
    const [status, setStatus] = useState(false);

    return (
        <div className="grid grid-rows-[100px_3fr_1fr] gap-4 p-5 text-white rounded-lg">
            <div className="flex flex-col items-center text-gray-400">
                <h1 className="text-2xl">Create New Partners</h1>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <FormInput label="First Name" type="text" placeholder="First Name" value="" width="w-full" onChange={() => {}} />
                        <FormInput label="Last Name" type="text" placeholder="Last Name" value="" width="w-full" onChange={() => {}} />
                    </div>
                    <FormInput label="Store Name" type="Text" placeholder="Enter Value" value="" width="w-full" onChange={() => {}} />
                    <FormInput label="Email" type="email" placeholder="Enter Email" value="" width="w-full" onChange={() => {}} />
                    <FormInput label="Password" type="password" placeholder="Enter Password" value="" width="w-full" onChange={() => {}} />
                    <div className="flex flex-col">
                        <label className="text-sm text-[#44536F]">Phone Number 01</label>
                        <div className="grid grid-cols-[100px_1fr] gap-4 justify-center items-center">
                            <Select shadow="shadow-md" width="w-[100px]" borderWidth="border" borderStyle="border-solid" borderColor="border-[#D5D7DB]" textColor="text-[#CACED8]" title={'+213'} options={["op1", "op2", "op3"]} bgColor="bg-white" isDisabled={true} />
                            <FormInput label="" type="text" placeholder="Enter Phone" value="" width="w-full" onChange={() => {}} />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm text-[#44536F]">Phone Number 01</label>
                        <div className="grid grid-cols-[100px_1fr] gap-4 items-center">
                            <Select shadow="shadow-md" width="w-[100px]" borderWidth="border" borderStyle="border-solid" borderColor="border-[#D5D7DB]" textColor="text-[#CACED8]" title={'+213'} options={["op1", "op2", "op3"]} bgColor="bg-white" isDisabled={true} />
                            <FormInput label="" type="text" placeholder="Enter Phone" value="" width="w-full" onChange={() => {}} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label className="text-sm text-[#44536F]">Wilaya</label>
                        <Select shadow="shadow-md" borderWidth="border" borderStyle="border-solid" borderColor="border-[#D5D7DB]" textColor="text-[#CACED8]" title="Wilaya" options={["op1", "op2", "op3"]} bgColor="bg-white" width="w-full" isDisabled={true} />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm text-[#44536F]">Commune</label>
                        <Select shadow="shadow-md" borderWidth="border" borderStyle="border-solid" borderColor="border-[#D5D7DB]" textColor="text-[#CACED8]" title="Commune" options={["op1", "op2", "op3"]} bgColor="bg-white" width="w-full" isDisabled={true} />
                    </div>
                    <FormInput label="Address" type="text" placeholder="Enter Address" value="" width="w-full" onChange={() => {}} />
                    <div className="flex flex-col">
                        <label className="text-sm text-[#44536F]">Speciality</label>
                        <Select shadow="shadow-md" borderWidth="border" borderStyle="border-solid" borderColor="border-[#D5D7DB]" textColor="text-[#CACED8]" title="Speciality" options={["op1", "op2", "op3"]} bgColor="bg-white" width="w-full" isDisabled={true} />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm text-[#44536F]">Start Date</label>
                        <Select shadow="shadow-md" borderWidth="border" borderStyle="border-solid" borderColor="border-[#D5D7DB]" textColor="text-[#CACED8]" title="Start Date" options={["op1", "op2", "op3"]} bgColor="bg-white" width="w-full" isDisabled={true} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <hr className="border-gray-400" />
                <div className="flex flex-col">
                    <h1 className="text-[#2F3A4E]">Status of This Account</h1>
                    <div className="flex flex-row gap-2 items-center">
                        {status ? <ToggleRight size={30} color="#FF3D00" onClick={() => setStatus(!status)} /> : <ToggleLeft size={30} onClick={() => setStatus(!status)} color="black" />}
                        <p className={status ? 'text-[#FF3D00]' : 'text-black'}> | {status ? "ON" : "OFF"}</p>
                    </div>
                </div>
                <hr className="border-gray-400" />
                <div className="flex flex-row justify-evenly gap-4">
                    <Select shadow="shadow-md" borderWidth="border" borderStyle="border-solid" borderColor="border-[#D5D7DB]" textColor="text-[#CACED8]" title="EN | Language" options={["op1", "op2", "op3"]} bgColor="bg-white" width="w-[200px]" isDisabled={true} />
                    <div className="flex flex-row gap-4">
                        <button className="bg-gray-400/50 text-white px-4 py-2 rounded-md" onClick={() => onClose()}>Cancel</button>
                        <button className="bg-[#FF3D00] text-white px-4 py-2 rounded-md">Create</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
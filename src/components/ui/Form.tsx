'use client';

import { useState } from "react";
import FormInput from "./FormInput";
import Select from "./Select";
import { Phone, Store, ToggleLeft, ToggleRight } from "lucide-react";
import { useForm } from "@/providers/FormProvider";

const Form = ({onClose, Edit} : {Edit?: Boolean, onClose: () => void}) => {
    
    const [status, setStatus] = useState(false); // for icon status
    const [errors, setErrors] = useState(); // for display errors if there is any

    const { formState, updateFormState, addPertner } = useForm();


    return (
        <div className="grid grid-rows-[fit-content_3fr_1fr] gap-4 p-5 rounded-lg">
            <div className={`flex ${Edit ? 'flex-row justify-between' :'flex-col'} items-center text-gray-400`}>
                {Edit ? (
                    <>
                        <h1 className="text-2xl">Edit Partners</h1>
                        <p>Last Update</p>
                    </>
                ) : (
                    <h1 className="text-2xl">Create New Partners</h1>
                )}
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <FormInput label="First Name" type="text" placeholder="First Name" width="w-full" onChange={(e) => {updateFormState('firstName', e.target.value)}} />
                        <FormInput label="Last Name" type="text" placeholder="Last Name" width="w-full" onChange={(e) => {updateFormState('lastName', e.target.value)}} />
                    </div>
                    <FormInput label="Store Name" type="Text" placeholder="Enter Value" width="w-full" onChange={(e) => {updateFormState('storeName', e.target.value)}} />
                    <FormInput label="Email" type="email" placeholder="Enter Email" width="w-full" onChange={(e) => {updateFormState('email', e.target.value)}} />
                    <FormInput label="Password" type="password" placeholder="Enter Password" width="w-full" onChange={(e) => {updateFormState('password', e.target.value)}} />
                    <div className="flex flex-col">
                        <label className="text-sm text-[#44536F]">Phone Number 01</label>
                        <div className="grid grid-cols-[100px_1fr] gap-4 justify-center items-center">
                            <Select key="form-select-key" shadow="shadow-md" width="w-[100px]" borderWidth="border" borderStyle="border-solid" borderColor="border-[#D5D7DB]" textColor="text-[#CACED8]" title={'+213'} options={["op1", "op2", "op3"]} bgColor="bg-white" isDisabled={true} onSelect={(e) => updateFormState('countryNumber_1', e.target.innerHTML)} />
                            <FormInput label="" type="text" placeholder="Enter Phone" width="w-full" onChange={(e) => {updateFormState('phone_1', e.target.value)}} />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm text-[#44536F]">Phone Number 01</label>
                        <div className="grid grid-cols-[100px_1fr] gap-4 items-center">
                            <Select key="form-select-key" shadow="shadow-md" width="w-[100px]" borderWidth="border" borderStyle="border-solid" borderColor="border-[#D5D7DB]" textColor="text-[#CACED8]" title={'+213'} options={["op1", "op2", "op3"]} bgColor="bg-white" isDisabled={true} onSelect={(e) => updateFormState('countryNumber_2', e.target.innerHTML)} />
                            <FormInput label="" type="text" placeholder="Enter Phone" width="w-full" onChange={(e) => {updateFormState('phone_2', e.target.value)}} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label className="text-sm text-[#44536F]">Wilaya</label>
                        <Select key="form-select-key" shadow="shadow-md" borderWidth="border" borderStyle="border-solid" borderColor="border-[#D5D7DB]" textColor="text-[#CACED8]" title="Wilaya" options={["op1", "op2", "op3"]} bgColor="bg-white" width="w-full" isDisabled={true} onSelect={(e) => updateFormState('wilaya', e.target.innerHTML)} />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm text-[#44536F]">Commune</label>
                        <Select key="form-select-key" shadow="shadow-md" borderWidth="border" borderStyle="border-solid" borderColor="border-[#D5D7DB]" textColor="text-[#CACED8]" title="Commune" options={["op1", "op2", "op3"]} bgColor="bg-white" width="w-full" isDisabled={true} onSelect={(e) => updateFormState('commune', e.target.innerHTML)} />
                    </div>
                    <FormInput label="Address" type="text" placeholder="Enter Address" width="w-full" onChange={(e) => {updateFormState('address', e.target.value)}} />
                    <div className="flex flex-col">
                        <label className="text-sm text-[#44536F]">Speciality</label>
                        <Select key="form-select-key" shadow="shadow-md" borderWidth="border" borderStyle="border-solid" borderColor="border-[#D5D7DB]" textColor="text-[#CACED8]" title="Speciality" options={["op1", "op2", "op3"]} bgColor="bg-white" width="w-full" isDisabled={true} onSelect={(e) => updateFormState('speciality', e.target.innerHTML)} />                 
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm text-[#44536F]">Start Date</label>
                        <Select key="form-select-key" shadow="shadow-md" borderWidth="border" borderStyle="border-solid" borderColor="border-[#D5D7DB]" textColor="text-[#CACED8]" title="Start Date" options={["op1", "op2", "op3"]} bgColor="bg-white" width="w-full" isDisabled={true} onSelect={(e) => updateFormState('startDate', e.target.innerHTML)} />
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
                    <Select key="form-select-key" shadow="shadow-md" borderWidth="border" borderStyle="border-solid" borderColor="border-[#D5D7DB]" textColor="text-[#CACED8]" title="EN | Language" options={["op1", "op2", "op3"]} bgColor="bg-white" width="w-[200px]" isDisabled={true} onSelect={(e) => updateFormState('language', e.target.innerHTML)} />
                    <div className="flex flex-row gap-4">
                        <button className="bg-gray-400/50 text-white px-4 py-2 rounded-md" onClick={() => onClose()}>Cancel</button>
                        <button className="bg-[#FF3D00] text-white px-4 py-2 rounded-md" onClick={() => addPertner({...formState, Phone: [`${formState.countryNumber_1}${formState.phone_1}`, `${formState.countryNumber_2}${formState.phone_2}`], status: 'active', Store: {id: '12', name: formState.storeName}})}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
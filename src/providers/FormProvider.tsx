'use client';

import { createContext, useContext, useState } from "react";
import { data } from "@/components/data/data";

export interface PartnerType {
    name: string;
    email: string;
    phone: string[];
    startDate: string;
    store: {id: string, name: string};
    status: string;
    speciality: string;
    wilaya: string;
}

interface FormState {
    firstName: string;
    lastName: string;
    storeName: string;
    email: string;
    password: string;
    countryNumber_1: string;
    phone_1: string;
    countryNumber_2: string;
    phone_2: string;
    wilaya: string;
    commune: string;
    address: string;
    speciality: string;
    startDate: string;
    language: string;
}

const initialFormState: FormState = {
    firstName: '',
    lastName: '',
    storeName: '',
    email: '',
    password: '',
    countryNumber_1: '',
    phone_1: '',
    countryNumber_2: '',
    phone_2: '',
    wilaya: '',
    commune: '',
    address: '',
    speciality: '',
    startDate: '',
    language: '',
};


interface FormContextType {
    formState: FormState;
    partnerData: PartnerType[];
    updateFormState: (key: keyof FormState, value: string) => void;
    setPartnerData: (data: PartnerType[]) => void;
    addPertner: (partner: FormState) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

const FormProvider = ({ children }: { children: React.ReactNode }) => {

    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [partnerData, setPartnerData] = useState(data);

    const updateFormState = (key: keyof FormState, value: string) => {
        setFormState((prevState) => ({
            ...prevState,
            [key]: value
        }));
    };

    const addPertner = (partner: FormState) => {
        const {email, startDate, speciality, wilaya} = partner;
        const newPartner = {
            name: `${partner.firstName} ${partner.lastName}`,
            email,
            phone: [`${partner.countryNumber_1} ${partner.phone_1}`,`${partner.countryNumber_2} ${partner.phone_2}`],
            startDate,
            store: {id: '12', name: partner.storeName},
            status: 'active',
            speciality,
            wilaya,
        }

        setPartnerData((prevState) => {
            return [...prevState, newPartner];
        });
    }

    return (
        <FormContext.Provider value={{ formState, partnerData, updateFormState, setPartnerData, addPertner }}>
            {children}
        </FormContext.Provider>
    );
};

const useForm = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useForm must be used within a FormProvider");
    }
    return context;
};

export { FormProvider, useForm };

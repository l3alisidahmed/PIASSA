'use client';

import { createContext, useContext, useState } from "react";
import { PartnerType } from "./FormProvider";
import { useForm } from "./FormProvider";

interface UpdateContextType {
    edit: boolean;
    setEdit: (value: boolean) => void;
    view: boolean;
    setView: (value: boolean) => void;
    remove: boolean;
    setRemove: (value: boolean) => void;
    elementID: string;
    setElementID: (id: string) => void;
    updatedData: PartnerType | undefined;
    setUpdatedData: (data: PartnerType) => void;
    getDataByID: () => void;
    deletePartnerByID: () => void;
}

const updateContext =  createContext<UpdateContextType | undefined>(undefined);

const UpdateProvider = ({children}:{children: React.ReactNode}) => {

    const { partnerData, setPartnerData } = useForm();

    const [edit, setEdit] = useState(false);
    const [view, setView] = useState(false);
    const [remove, setRemove] = useState(false);
    const [updatedData, setUpdatedData] = useState<PartnerType | undefined>(undefined);
    const [elementID, setElementID] = useState<string>('');

    const getDataByID = () => {
        const data = partnerData.filter((partner: PartnerType, index: number) => index === +elementID ? partner : null);
        setUpdatedData(data[0]);
    }

    const deletePartnerByID = () => {
        const data = partnerData.filter((partner: PartnerType, index: number) => index !== +elementID ? partner : null);
        setPartnerData(data);
        setRemove(false);
        setElementID('');
    }

    return (
        <updateContext.Provider value={{ 
            elementID, 
            setElementID, 
            updatedData, 
            setUpdatedData, 
            getDataByID, 
            deletePartnerByID,
            edit,
            setEdit,
            view,
            setView,
            remove,
            setRemove 
        }}>
            {children}
        </updateContext.Provider>
    );
}

const useUpdate = () => {
    const context = useContext(updateContext);
    if (!context) {
        throw new Error('useUpdate must be used within a UpdateProvider');
    }
    return context;
}

export { UpdateProvider, useUpdate };
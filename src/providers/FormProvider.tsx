'use client';

import { createContext, useContext, useState } from "react";

const FormProvider = ({children} : {children: React.ReactNode}) => {
    
    const FormContext = createContext({});

    const [formState, setFormState] = useState({});

    const useForm = () => {
        return useContext(FormContext);
    }

    const updateFormState = (key: string, value: string) => {
        setFormState((prevState) => ({
            ...prevState,
            [key]: value
        }));
    }

    return (
        <FormContext.Provider value={{formState, updateFormState}}>
            {children}
        </FormContext.Provider>
    );
}

export default FormProvider;
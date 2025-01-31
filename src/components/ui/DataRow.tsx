'use client';

import { useForm } from "@/providers/FormProvider";
import { useSearch } from "@/providers/SearchProvider";
import PartnerCard from "./PartnerCard";


const DataRow = () => {

    const { partnerData } = useForm();

    const { search } = useSearch();

    return (
        <div className="flex flex-col gap-5 overflow-auto h-[630px] scrollbar-hide">
            {search === "" ? (
                partnerData.map((partner:any, index:any) => (
                    <PartnerCard key={index} partner={partner} />
                ))
            ) : (
                partnerData.filter((partner:any) => partner.name.toLowerCase().includes(search.toLowerCase())).map((partner:any, index:any) => (
                    <PartnerCard key={index} partner={partner} />
                ))
            )}
        </div>
    );
}

export default DataRow;
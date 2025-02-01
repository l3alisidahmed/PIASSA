'use client';

import { useForm } from "@/providers/FormProvider";
import { useSearch } from "@/providers/SearchProvider";
import PartnerCard from "./PartnerCard";
import { PartnerType } from "@/providers/FormProvider";

const DataRow = () => {

    const { partnerData } = useForm();

    const { search } = useSearch();

    return (
        <div className="flex flex-col gap-5 overflow-auto h-[630px] scrollbar-hide">
            {search === "" ? (
                partnerData.map((partner:PartnerType, index:number) => (
                    <PartnerCard key={index} partner={partner} />
                ))
            ) : (
                partnerData.filter((partner:PartnerType) => partner.name.toLowerCase().includes(search.toLowerCase())).map((partner:PartnerType, index:number) => (
                    <PartnerCard key={index} partner={partner} />
                ))
            )}
        </div>
    );
}

export default DataRow;
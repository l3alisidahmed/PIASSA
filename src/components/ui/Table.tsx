import React from "react";
import DataRow from "./DataRow";
import HeaderTable from "./HeaderTable";
import IconCard from "./IconCard";

interface Store {
    id: string | number;
    name: string;
}

interface Data {
    name: string;
    email: string;
    phone: string | string[];
    startDate: string;
    store: Store;
    status: string;
    speciality: React.ReactNode;
    wilaya: string;
}

interface TableProps {
    data: Data[];
}

const Table : React.FC<TableProps> = ({data}) => {
    return (
        <div className="w-full p-5 flex flex-col gap-5">
            <div className="grid grid-cols-[1fr_100px] gap-5">
                <HeaderTable />
                <div>
                    <IconCard bgColor="transparent" opacity="opacity-0" />
                </div>
            </div>
            <DataRow data={data} />
        </div>
    );
}

export default Table;
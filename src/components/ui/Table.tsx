import React from "react";
import DataRow from "./DataRow";
import HeaderTable from "./HeaderTable";
import IconCard from "./IconCard";

const Table = () => {
    return (
        <div className="w-full p-5 flex flex-col gap-5">
            <div className="grid grid-cols-[1fr_100px] gap-5">
                <HeaderTable />
                <div>
                    <IconCard bgColor="transparent" opacity="opacity-0" />
                </div>
            </div>
            <DataRow />
        </div>
    );
}

export default Table;
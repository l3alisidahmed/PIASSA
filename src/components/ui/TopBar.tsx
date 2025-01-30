import Search from "./Search";
import Select from "./Select";

const Options = [
    "Adrar",
    "Chlef",
    "Laghouat",
    "Oum El Bouaghi",
    "Batna",
    "Béjaïa",
    "Biskra",
    "Béchar",
    "Blida",
    "Bouira",
    "Tamanrasset",
    "Tébessa",
    "Tlemcen",
    "Tiaret",
    "Tizi Ouzou",
    "Alger",
    "Djelfa",
]

const TopBar = () => {
    return (
        <div className="h-20 flex flex-row items-center justify-between px-5">
            <div className="flex flex-row items-center gap-5">
                <Search />
                <Select title="Select Wilaya" options={Options}/>
            </div>
            <div className="flex flex-row items-center gap-5">
                <div>
                    <p>Admin Name</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <p>1/30/2025</p>
                    <p>12:00 PM</p>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
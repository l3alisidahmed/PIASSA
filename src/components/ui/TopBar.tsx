import Search from "./Search";


const TopBar = () => {
    return (
        <div className="w-screen h-20 bg-[#FF3D00] flex flex-row items-center justify-between p-5">
            <div className="flex flex-row items-center gap-5">
                <Search />
            </div>
            <div></div>
        </div>
    );
}

export default TopBar;
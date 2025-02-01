import { VerticalBarChart } from "./VerticalBarChart";
import IconCard from "./IconCard";

const View = () => {
    return (
        <div className="grid grid-cols-[1fr_100px] gap-5">
                    <div className="grid grid-cols-[1fr_250px] gap-5">
                        <VerticalBarChart />
                        <div className="flex flex-col gap-5 justify-between bg-white text-black w-full p-5">
                            <div className="flex flex-col">
                                <h1>Due Date</h1>
                                <p>1/31/2025</p>
                            </div>
                            <div className="flex flex-col">
                                <h1>Number of Salles</h1>
                                <p>123456</p>
                            </div>
                            <div className="flex flex-col">
                                <h1>Reference</h1>
                                <p>INV-057</p>
                            </div>
                            <div className="flex flex-col">
                                <h1>DZ Shop #</h1>
                                <p>EFK43210</p>
                            </div>
                        </div>
                    </div>
                    <IconCard opacity="opacity-0" />
                </div>
    );
}

export default View;
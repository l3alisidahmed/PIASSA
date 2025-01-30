export default function Logo() {
    return (
        <div className="flex flex-row items-center justify-center gap-3 p-4">
            <img src="/Logo.png" alt="" />
            <p className="text-[#FF3D00]"> | </p>
            <p className="text-white font-bold">PIASSA</p>
        </div>
    );
}
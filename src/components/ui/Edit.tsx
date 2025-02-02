import Form from "./Form";
import IconCard from "./IconCard";

interface EditProps {
    value: {[key: string]: string};
    onClose: () => void;
}

const Edit: React.FC<EditProps> = ({value, onClose}) => {
    return (
        <div className="grid grid-cols-[1fr_100px] gap-5">
            <div className="bg-white text-black">
                <Form value={value} onClose={onClose} Edit={true}  />
            </div>
            <IconCard opacity="opacity-0" />
        </div>
    );
}

export default Edit;
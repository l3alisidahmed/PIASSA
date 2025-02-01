import Form from "./Form";
import IconCard from "./IconCard";

interface EditProps {
    onClose: () => void;
}

const Edit: React.FC<EditProps> = ({onClose}) => {
    return (
        <div className="grid grid-cols-[1fr_100px] gap-5">
            <div className="bg-white text-black">
                <Form onClose={onClose} Edit={true} />
            </div>
            <IconCard opacity="opacity-0" />
        </div>
    );
}

export default Edit;
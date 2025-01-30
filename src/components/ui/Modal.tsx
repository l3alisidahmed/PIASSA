import Form from "./Form";

interface ModalProps {
    showModal: boolean;
    onClose: () => void;
}

const Modal : React.FC<ModalProps> = ({showModal, onClose}) => {
    if (!showModal) return null;
    
    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white/80 shadow-lg backdrop-blur-[60px] p-10 rounded-lg">
                <Form onClose={onClose} />
            </div>
        </div>
    );
}

export default Modal;
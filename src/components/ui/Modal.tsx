import Form from "./Form";

interface ModalProps {
    children?: React.ReactNode;
    showModal: boolean;
    onClose: () => void;
}

const Modal : React.FC<ModalProps> = ({children, showModal, onClose}) => {
    if (!showModal) return null;
    
    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
            {children}
        </div>
    );
}

export default Modal;
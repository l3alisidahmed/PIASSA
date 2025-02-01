import * as motion from "motion/react-client"
interface ModalProps {
    children?: React.ReactNode;
    showModal: boolean;
    onClose: () => void;
}

const Modal : React.FC<ModalProps> = ({children, showModal, onClose}) => {
    if (!showModal) return null;
    
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.2}} className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
            {children}
        </motion.div>
    );
}

export default Modal;
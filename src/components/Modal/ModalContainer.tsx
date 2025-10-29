import { AnimatePresence, motion, type Variants } from "motion/react";
import type { FC, ReactNode } from "react";
import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";

interface ModalProps {
 isOpen: boolean;
 children: ReactNode;
 onClose: () => void;
}

type ModalContainerComponent = FC<ModalProps> & {
 ModalHeader: FC<{ children: ReactNode; className?: string }>;
 ModalBody: FC<{ children: ReactNode; className?: string }>;
};
// This line tell typescript theat ModalContainer is BOTH a components itself and an object with two properties
// both are components that take parmas -> FC<{ children: ReactNode; className?: string }>

const ModalContainer: ModalContainerComponent = ({
 children,
 isOpen,
 onClose,
}) => {
 return (
  <AnimatePresence>
   {isOpen && (
    <motion.div
     key="backdrop"
     className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
     variants={backdropVariants}
     initial="hidden"
     animate="visible"
     exit="hidden"
     onClick={onClose}
    >
     <motion.div
      key="modal"
      className="bg-white p-4 rounded-2xl shadow-2xl w-full max-w-md mx-4"
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
     >
      {children}
     </motion.div>
    </motion.div>
   )}
  </AnimatePresence>
 );
};

export default ModalContainer;

ModalContainer.ModalHeader = ModalHeader; //Add the component as property to ModalContainer
ModalContainer.ModalBody = ModalBody;

const backdropVariants = {
 hidden: { opacity: 0 },
 visible: { opacity: 1 },
};

const modalVariants = {
 hidden: {
  opacity: 0,
  scale: 0.95,
  y: -15,
 },
 visible: {
  opacity: 1,
  scale: 1,
  y: 0,
  transition: {
   type: "spring",
   stiffness: 250,
   damping: 20,
  },
 },
 exit: {
  opacity: 0,
  scale: 0.9,
  y: -10,
  transition: {
   duration: 0.2,
   ease: "easeInOut",
  },
 },
} as Variants;

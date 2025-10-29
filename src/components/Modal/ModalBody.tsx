import type { ReactNode } from "react";

interface ModalBodyProp {
 children: ReactNode;
 className?: string;
}

const ModalBody = ({ children, className }: ModalBodyProp) => {
 // For reusability, responsibility of both child and style are on parent
 // And note that ModalBody is subComponent of ModalContainer component
 return <div className={className}>{children}</div>;
};

export default ModalBody;

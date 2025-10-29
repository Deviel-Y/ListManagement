import type { ReactNode } from "react";

interface ModalHeaderProp {
 children: ReactNode;
 className?: string;
}

const ModalHeader = ({ children, className }: ModalHeaderProp) => {
 // For reusability, responsibility of both child and style are on parent
 // And note that ModalHeader is subComponent of ModalContainer component
 return <p className={className}>{children}</p>;
};

export default ModalHeader;

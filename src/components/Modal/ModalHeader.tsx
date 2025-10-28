import type { ReactNode } from "react";

interface ModalHeaderProp {
 children: ReactNode;
 className?: string;
}

const ModalHeader = ({ children, className }: ModalHeaderProp) => {
 return <p className={className}>{children}</p>;
};

export default ModalHeader;

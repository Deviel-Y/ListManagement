import type { ReactNode } from "react";

interface ModalBodyProp {
 children: ReactNode;
 className?: string;
}

const ModalBody = ({ children, className }: ModalBodyProp) => {
 return <div className={className}>{children}</div>;
};

export default ModalBody;

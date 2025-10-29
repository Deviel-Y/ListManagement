import type { ReactNode } from "react";

interface Props {
 children: ReactNode;
 className?: string;
}

const TableTopContent = ({ children, className }: Props) => {
 // For reusability, responsibility of both child and style are on parent
 // And note that TableTopContent is subComponent of TableContainer component
 return <div className={className}>{children}</div>;
};

export default TableTopContent;

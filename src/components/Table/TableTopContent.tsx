import type { ReactNode } from "react";

interface Props {
 children: ReactNode;
 className?: string;
}

const TableTopContent = ({ children, className }: Props) => {
 return <div className={className}>{children}</div>;
};

export default TableTopContent;

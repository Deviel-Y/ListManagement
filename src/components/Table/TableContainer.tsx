import type { FC, ReactNode } from "react";
import type { ListType } from "../../store";
import TableBody from "./TableBody";
import TableTitle from "./TableTitle";
import TableTopContent from "./TableTopContent";

interface TableProps {
 children: ReactNode;
 className?: string;
}

type TableContainerComponent = FC<TableProps> & {
 TableTitle: FC<{
  label: string;
  className?: string;
 }>;

 TableBody: FC<{ lists: ListType[] }>;
 TableTopContent: FC<{ children: ReactNode; className?: string }>;
};
// This line tell typescript theat TableContainer is BOTH a components itself and an object with two properties
// both are components that take parmas -> FC<{ lists: ListType[] }>

const TableContainer: TableContainerComponent = ({ children, className }) => {
 return <div className={className}>{children}</div>;
};

export default TableContainer;

TableContainer.TableTitle = TableTitle; //Add the component as property to TableContainer
TableContainer.TableBody = TableBody;
TableContainer.TableTopContent = TableTopContent;

import type { FC, ReactNode } from "react";
import type { ListType } from "./TableBody";
import TableBody from "./TableBody";
import TableTitle from "./TableTitle";
import TableTopContent from "./TableTopContent";

interface TableProps {
 children: ReactNode;
}

type TableContainerComponent = FC<TableProps> & {
 TableTitle: FC<{
  label: string;
  className?: string;
 }>;

 TableBody: FC<{
  lists: ListType[];
  tableColumnLabels: string[];
 }>;

 TableTopContent: FC<{ children: ReactNode; className?: string }>;
};

const TableContainer: TableContainerComponent = ({ children }) => {
 return (
  <div className="rounded-xl border border-gray-400 w-1/2 flex flex-col items-start justify-center">
   {children}
  </div>
 );
};

export default TableContainer;

TableContainer.TableTitle = TableTitle;
TableContainer.TableBody = TableBody;
TableContainer.TableTopContent = TableTopContent;

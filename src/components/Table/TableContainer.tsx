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

const TableContainer: TableContainerComponent = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default TableContainer;

TableContainer.TableTitle = TableTitle;
TableContainer.TableBody = TableBody;
TableContainer.TableTopContent = TableTopContent;

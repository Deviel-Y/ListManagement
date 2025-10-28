interface TableHeaderProps {
 label: string;
 className?: string;
}

const TableTitle = ({ label, className }: TableHeaderProps) => {
 return <p className={className}>{label}</p>;
};

export default TableTitle;

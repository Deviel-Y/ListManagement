interface TableHeaderProps {
 label: string;
 className?: string;
}

const TableTitle = ({ label, className }: TableHeaderProps) => {
 // For reusability, responsibility of both child and style are on parent
 // And note that TableTitle is subComponent of TableContainer component
 return <p className={className}>{label}</p>;
};

export default TableTitle;

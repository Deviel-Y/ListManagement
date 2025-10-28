import Button from "../Button";

export type ListType = { createdAt: string; title: string; subtitle: string };

interface TableBodyProps {
 lists: ListType[];
 tableColumnLabels: string[];
}

const TableBody = ({ lists, tableColumnLabels }: TableBodyProps) => {
 return (
  <div className="overflow-hidden rounded-bl-xl rounded-br-xl w-full ">
   {lists.length ? (
    <table className="text-sm text-center w-full">
     <thead className="bg-gray-100 uppercase">
      <tr>
       {tableColumnLabels.map((label, index) => (
        <th scope="col" className="px-6 py-3 max-w-24" key={index}>
         {label}
        </th>
       ))}
      </tr>
     </thead>

     <tbody>
      {lists.map((list) => (
       <tr
        key={list.title}
        className="odd:bg-white even:bg-gray-50 border border-gray-100"
       >
        <td className="px-3 py-4">{list.title}</td>
        <td className="px-3 py-4">{list.subtitle}</td>
        <td className="px-3 py-4">{list.createdAt}</td>
        <td className="px-3 py-4 flex flex-row items-center justify-center gap-2">
         <Button varients="warning" label="edit" onClick={() => {}} />
         <Button label="delete" onClick={() => {}} />
        </td>
       </tr>
      ))}
     </tbody>
    </table>
   ) : (
    <p>No content To Show...</p>
   )}
  </div>
 );
};

export default TableBody;

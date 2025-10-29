import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import useListStore, { type ListType } from "../../store";
import Button from "../Button";
import ModalTriggerButton from "../Modal/ModalTriggerButton";

interface Props {
  lists: ListType[];
}
const TableBody = ({ lists }: Props) => {
  //   const lists = useListStore((s) => s.lists);
  const deleteList = useListStore((s) => s.deleteList);

  return (
    <div className="overflow-hidden rounded-bl-xl rounded-br-xl w-full ">
      {lists.length ? (
        <table className="text-sm text-center w-full">
          <thead className="bg-gray-100 uppercase">
            <tr>
              {tableColumns.map((label, index) => (
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
                  <ModalTriggerButton
                    varient="warning"
                    buttonLabel={<HiOutlinePencilAlt size={25} />}
                    listToEdit={list}
                  />

                  <Button
                    varients="danger"
                    label={<HiOutlineTrash size={25} />}
                    onClick={() => deleteList(list.title)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="flex flex-row justify-center items-center h-48 font-bold ">
          No content To Show...
        </p>
      )}
    </div>
  );
};

const tableColumns: string[] = ["title", "subtitle", "created At", "Action"];

export default TableBody;

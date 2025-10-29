import ModalTriggerButton from "./components/Modal/ModalTriggerButton";
import TableContainer from "./components/Table/TableContainer";
import useListStore from "./store";

function App() {
 const lists = useListStore((s) => s.lists);

 return (
  <main className="h-dvh flex flex-col items-center max-sm:mx-1 justify-center">
   <TableContainer className="rounded-xl border border-gray-400 w-2/3 max-sm:w-full max-md:w-4/5 flex flex-col items-start justify-center">
    <TableContainer.TableTitle
     className="w-full text-center mt-2 text-2xl max-sm:text-xl"
     label="List management"
    />

    <TableContainer.TableTopContent className="p-2">
     <ModalTriggerButton
      buttonLabel="Create new list"
      varient="primary-solid"
     />
    </TableContainer.TableTopContent>

    <TableContainer.TableBody lists={lists} />
   </TableContainer>
  </main>
 );
}

export default App;

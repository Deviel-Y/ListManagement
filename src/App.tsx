import ModalTriggerButton from "./components/Modal/ModalTriggerButton";
import type { ListType } from "./components/Table/TableBody";
import TableContainer from "./components/Table/TableContainer";

function App() {
 return (
  <main className="h-dvh flex flex-row items-center justify-center">
   <TableContainer>
    <TableContainer.TableTitle
     className="font-semibold py-2 w-full text-center text-xl"
     label="this is a label"
    />

    <TableContainer.TableTopContent className="w-full p-2">
     <ModalTriggerButton />
    </TableContainer.TableTopContent>

    <TableContainer.TableBody
     tableColumnLabels={["title", "subtitle", "createdAt", "action"]}
     lists={lists}
    />
   </TableContainer>
  </main>
 );
}

export default App;

const lists: ListType[] = [
 { title: "title1", subtitle: "subtitle1", createdAt: "createdAt1" },
 { title: "title2", subtitle: "subtitle2", createdAt: "createdAt2" },
 { title: "title3", subtitle: "subtitle3", createdAt: "createdAt3" },
 { title: "title4", subtitle: "subtitle4", createdAt: "createdAt4" },
];

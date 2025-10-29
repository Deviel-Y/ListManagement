import ModalTriggerButton from "./components/Modal/ModalTriggerButton";
import TableContainer from "./components/Table/TableContainer";

function App() {
  return (
    <main className="h-dvh flex flex-col items-center justify-center">
      <TableContainer>
        <TableContainer.TableTitle
          className="w-full text-center mt-2 text-2xl"
          label="List management"
        />

        <TableContainer.TableTopContent className="p-2">
          <ModalTriggerButton buttonLabel="Create new list" varient="primary" />
        </TableContainer.TableTopContent>

        <TableContainer.TableBody />
      </TableContainer>
    </main>
  );
}

export default App;

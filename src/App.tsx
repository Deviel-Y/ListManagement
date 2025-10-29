import ModalTriggerButton from "./components/Modal/ModalTriggerButton";
import TableContainer from "./components/Table/TableContainer";

function App() {
  return (
    <main className="h-dvh flex flex-col items-center justify-center">
      <TableContainer>
        <TableContainer.TableTitle label="List management" />

        <TableContainer.TableTopContent>
          <ModalTriggerButton buttonLabel="Create new list" varient="primary" />
        </TableContainer.TableTopContent>

        <TableContainer.TableBody />
      </TableContainer>
    </main>
  );
}

export default App;

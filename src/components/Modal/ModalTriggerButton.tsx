import { useState, type JSX } from "react";
import type { ListType } from "../../store";
import Button from "../Button";
import Form from "../Form";
import ModalContainer from "./ModalContainer";

interface Props {
  varient?: ModalTriggerButtonVarients;
  buttonLabel: string | JSX.Element;
  listToEdit?: ListType;
}

const ModalTriggerButton = ({
  varient = "primary",
  buttonLabel,
  listToEdit,
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        varients={varient}
        label={buttonLabel}
        onClick={() => setIsOpen(true)}
      />

      <ModalContainer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalContainer.ModalHeader className="text-center mb-5">
          {listToEdit ? "Edit List Form" : "Create New List Form"}
        </ModalContainer.ModalHeader>

        <ModalContainer.ModalBody>
          <Form listToEdit={listToEdit} />
        </ModalContainer.ModalBody>
      </ModalContainer>
    </>
  );
};

export default ModalTriggerButton;

export type ModalTriggerButtonVarients = "primary" | "warning" | "danger";

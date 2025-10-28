import { useState } from "react";
import Button from "../Button";
import ModalContainer from "./ModalContainer";

interface Props {
 varient?: ModalTriggerButtonVarients;
}

const ModalTriggerButton = ({ varient = "primary" }: Props) => {
 const [isOpen, setIsOpen] = useState<boolean>(false);

 return (
  <>
   <Button
    varients={varient}
    label="Click me"
    onClick={() => setIsOpen(true)}
   />

   <ModalContainer isOpen={isOpen} onClose={() => setIsOpen(false)}>
    <ModalContainer.ModalHeader> Modal header</ModalContainer.ModalHeader>

    <ModalContainer.ModalBody> Modal header</ModalContainer.ModalBody>
   </ModalContainer>
  </>
 );
};

export default ModalTriggerButton;

export type ModalTriggerButtonVarients = "primary" | "warning";

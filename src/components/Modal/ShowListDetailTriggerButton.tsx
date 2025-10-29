import { useState, type JSX } from "react";
import type { ListType } from "../../store";
import Button, { type ModalTriggerButtonVarients } from "../Button";
import ModalContainer from "./ModalContainer";

interface Props {
 varient?: ModalTriggerButtonVarients;
 buttonLabel: string | JSX.Element;
 listToShow: ListType;
}

const ShowListDetailTriggerButton = ({
 varient = "primary-outline",
 buttonLabel,
 listToShow: listToEdit,
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
    <ModalContainer.ModalHeader className="text-center font-semibold text-xl mb-5">
     List Detail
    </ModalContainer.ModalHeader>

    <ModalContainer.ModalBody>
     <div className="flex flex-col justify-centers items-start gap-3">
      <div className="flex flex-row items-start justify-center gap-1">
       <span className="font-semibold text-nowrap ">Title :</span>
       <span className="text-left">{listToEdit?.title}</span>
      </div>

      <div className="flex flex-row items-start justify-center gap-1">
       <span className="font-semibold text-nowrap ">SubTitle :</span>
       <span className="text-left">{listToEdit?.subtitle}</span>
      </div>

      <div className="flex flex-row items-start justify-center gap-1">
       <span className="font-semibold text-nowrap ">Created At :</span>
       <span className="text-left">{listToEdit?.createdAt}</span>
      </div>
     </div>
    </ModalContainer.ModalBody>
   </ModalContainer>
  </>
 );
};

export default ShowListDetailTriggerButton;

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { listSchema, type ListSchemaType } from "../lib/validationSchemas";
import type { ListType } from "../store";
import useListStore from "../store";
import Button from "./Button";
import FormErrorMessage from "./FormErrorMessage";
import Input from "./Input";

interface Props {
 listToEdit?: ListType;
 onClose: (modalState: boolean) => void;
}

const Form = ({ listToEdit, onClose }: Props) => {
 const [isDisable, setIsDisable] = useState<boolean>(false);
 const addToList = useListStore((s) => s.addToList);
 const editList = useListStore((s) => s.editList);
 const lists = useListStore((s) => s.lists);

 const fakeApiCall = <T,>(data: T, delay = 1000): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(data), delay));

 const {
  control,
  handleSubmit,
  formState: { errors },
 } = useForm<ListSchemaType>({
  resolver: zodResolver(listSchema),
 });

 return (
  <form
   onSubmit={handleSubmit((data) => {
    setIsDisable(true);

    const list = lists.find((list) => list.title === data.title);
    if (list)
     return (
      toast.error("List with this title is already exists."),
      setIsDisable(false)
     );

    if (listToEdit) {
     const updatedList = fakeApiCall<ListSchemaType & { createdAt: string }>({
      createdAt: listToEdit.createdAt,
      title: data.title,
      subtitle: data.subtitle,
     });

     return toast
      .promise(updatedList, {
       loading: "Editting...",
       error: "Couldn't edit the list",
       success: "Successfully editted",
      })
      .then((res) => {
       editList(res);
       onClose(false);
      })
      .finally(() => setIsDisable(false));
    }

    const newList = fakeApiCall<ListSchemaType & { createdAt: string }>({
     ...data,
     createdAt: new Date().toLocaleString(),
    });
    toast
     .promise(newList, {
      loading: "Creating...",
      error: "Couldn't create the list",
      success: "Successfully created",
     })
     .then((res) => {
      addToList(res);
      onClose(false);
     })
     .finally(() => setIsDisable(false));
   })}
   className="flex flex-col gap-5"
  >
   <div className="flex flex-col gap-1 ">
    <Controller
     defaultValue={listToEdit?.title}
     control={control}
     name="title"
     render={({ field: { onChange } }) => (
      <Input
       defaultValue={listToEdit?.title}
       label="Title"
       onChange={onChange}
      />
     )}
    />

    <AnimatePresence>
     {errors.title && (
      <FormErrorMessage errorMessage={errors.title.message as string} />
     )}
    </AnimatePresence>
   </div>

   <div className="flex flex-col gap-1">
    <Controller
     defaultValue={listToEdit?.subtitle}
     control={control}
     name="subtitle"
     render={({ field: { onChange } }) => (
      <Input
       defaultValue={listToEdit?.subtitle}
       label="Subtitle"
       onChange={onChange}
      />
     )}
    />

    <AnimatePresence>
     {errors.subtitle && (
      <FormErrorMessage errorMessage={errors.subtitle.message as string} />
     )}
    </AnimatePresence>
   </div>

   <Button
    disable={isDisable}
    label={listToEdit ? "Edit list" : "Create new list"}
    type="submit"
   />
  </form>
 );
};

export default Form;

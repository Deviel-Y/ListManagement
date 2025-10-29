import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "motion/react";
import { Controller, useForm } from "react-hook-form";
import { listSchema, type ListSchemaType } from "../lib/validationSchemas";
import type { ListType } from "../store";
import useListStore from "../store";
import Button from "./Button";
import FormErrorMessage from "./FormErrorMessage";
import Input from "./Input";

interface Props {
  listToEdit?: ListType;
}

const Form = ({ listToEdit }: Props) => {
  const addToList = useListStore((s) => s.addToList);
  const editList = useListStore((s) => s.editList);

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
        listToEdit
          ? editList({
              createdAt: listToEdit.createdAt,
              subtitle: data.subtitle,
              title: data.title,
            })
          : addToList({ ...data, createdAt: new Date().toString() });
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
            <FormErrorMessage
              errorMessage={errors.subtitle.message as string}
            />
          )}
        </AnimatePresence>
      </div>

      <Button
        label={listToEdit ? "Edit list" : "Create new list"}
        type="submit"
      />
    </form>
  );
};

export default Form;

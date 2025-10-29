import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "motion/react";
import { Controller, useForm } from "react-hook-form";
import { listSchema, type ListSchemaType } from "../lib/validationSchemas";
import Button from "./Button";
import FormErrorMessage from "./FormErrorMessage";
import Input from "./Input";

const Form = () => {
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
        console.log(data);
      })}
      className="flex flex-col gap-5"
    >
      <div className="flex flex-col gap-1 ">
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange } }) => (
            <Input label="Title" onChange={onChange} />
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
          control={control}
          name="subtitle"
          render={({ field: { onChange } }) => (
            <Input label="Subtitle" onChange={onChange} />
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

      <Button label="Create new list" type="submit" />
    </form>
  );
};

export default Form;

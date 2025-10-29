import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { listSchema, type ListSchemaType } from "../lib/validationSchemas";
import Button from "./Button";
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
      className="flex flex-row gap-5"
    >
      <div className="flex flex-col gap-1">
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange } }) => (
            <Input label="Title" onChange={onChange} />
          )}
        />

        {errors.title && <p>{errors.title?.message}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <Controller
          control={control}
          name="subtitle"
          render={({ field: { onChange } }) => (
            <Input label="Subtitle" onChange={onChange} />
          )}
        />

        {errors.subtitle && <p>{errors.subtitle?.message}</p>}
      </div>

      <Button label="Create new list" type="submit" />
    </form>
  );
};

export default Form;

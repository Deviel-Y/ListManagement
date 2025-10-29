import { z } from "zod";

export type ListSchemaType = z.infer<typeof listSchema>;

export const listSchema = z.object({
  title: z
    .string("Title is required")
    .min(1, "Title is required")
    .max(50, "Title must be less than 50 characters long"),

  subtitle: z
    .string("Subtitle is required")
    .min(1, "Subtitle is required")
    .max(200, "Subtitle must be less than 200 characters long"),
});

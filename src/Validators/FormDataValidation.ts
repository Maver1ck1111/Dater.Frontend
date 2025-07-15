import { z }  from "zod";

export const schema = z.object({
  email: z.string().email("Inccorect email"),
  password: z
    .string()
    .min(6, "Password is too short")
    .refine(
      (value) => (value.match(/\d/g) || []).length >= 3,
      {
        message: "Password must contain at least 3 digits",
      }
    )
});

export type FormDataValidation = z.infer<typeof schema>;
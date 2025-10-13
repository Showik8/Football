import { z } from "zod";

const formSchema = z
  .object({
    name: z.string().min(1, "სახელი სავალდებულოა"),
    age_category: z.string().min(1, "ასაკის კატეგორია სავალდებულოა"),
    location: z.string().min(1, "მდებარეობა სავალდებულოა"),
    description: z.string().optional(),
    start_date: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), "არასწორი თარიღის ფორმატი"),
    end_date: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), "არასწორი თარიღის ფორმატი")
      .optional(),
  })
  .refine(
    (data) => {
      if (data.end_date && data.start_date) {
        return new Date(data.end_date) >= new Date(data.start_date);
      }
      return true;
    },
    {
      message: "დამთავრების თარიღი უნდა იყოს დაწყების შემდეგ",
      path: ["end_date"],
    }
  );
export type FormData = z.infer<typeof formSchema>;
export { formSchema };

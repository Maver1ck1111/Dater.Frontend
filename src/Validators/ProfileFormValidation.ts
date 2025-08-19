import z from "zod";
import { Gender } from "../Enums/Gender";
import { HobbyInterest } from "../Enums/HobbyInterest";
import { FoodInterest } from "../Enums/FoodInterest";
import { TravelInterest } from "../Enums/TravelInterest";
import { SportInterest } from "../Enums/SportInterest";
import { MusicInterest } from "../Enums/MusicInterest";
import { MovieInterest } from "../Enums/MovieInterest";
import { LyfestyleInterest } from "../Enums/LyfestyleInterest";
import { BookInterest } from "../Enums/BookInterest";

export const profileSchema = z
  .object({
    name: z
      .string()
      .max(30, "Name must be no longer than 30 characters")
      .min(5, "Name must be at least 5 characters long"),
    description: z
      .string()
      .max(300, "Description must be no longer than 300 characters")
      .min(20, "Description must be at least 20 characters long"),
    dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    }),
    bookInterest: z.nativeEnum(BookInterest),
    foodInterest: z.nativeEnum(FoodInterest),
    hobbyInterest: z.nativeEnum(HobbyInterest),
    gender: z.nativeEnum(Gender),
    lyfestyleInterest: z.nativeEnum(LyfestyleInterest),
    movieInterest: z.nativeEnum(MovieInterest),
    musicInterest: z.nativeEnum(MusicInterest),
    sportInterest: z.nativeEnum(SportInterest),
    travelInterest: z.nativeEnum(TravelInterest),
    photos: z
      .array(z.instanceof(File))
      .nonempty({ message: "Upload at least 1 photo" }),
  })
  .superRefine((data, ctx) => {
    const filledCount = [
      data.bookInterest !== BookInterest.None,
      data.foodInterest !== FoodInterest.None,
      data.hobbyInterest !== HobbyInterest.None,
      data.lyfestyleInterest !== LyfestyleInterest.None,
      data.movieInterest !== MovieInterest.None,
      data.musicInterest !== MusicInterest.None,
      data.sportInterest !== SportInterest.None,
      data.travelInterest !== TravelInterest.None,
    ].filter(Boolean).length;

    if (filledCount < 3) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please select at least 3 interests from the provided fields.",
        path: ["_form"],
      });
    }
  });

export type ProfileDataValidation = z.infer<typeof profileSchema>;

import type { ZodGUID } from "zod";
import type { Gender } from "../Enums/Gender";
import type { BookInterest } from "../Enums/BookInterest";
import type { SportInterest } from "../Enums/SportInterest";
import type { MovieInterest } from "../Enums/MovieInterest";
import type { MusicInterest } from "../Enums/MusicInterest";
import type { FoodInterest } from "../Enums/FoodInterest";
import type { LyfestyleInterest } from "../Enums/LyfestyleInterest";
import type { TravelInterest } from "../Enums/TravelInterest";
import type { HobbyInterest } from "../Enums/HobbyInterest";

export interface Profile {
  accountID: ZodGUID;
  imagePaths: string[];
  photos: File[];
  name: string;
  description: string;
  gender: Gender;
  dateOfBirth: Date;
  bookInterest: BookInterest;
  sportInterest: SportInterest;
  movieInterest: MovieInterest;
  musicInterest: MusicInterest;
  foodInterest: FoodInterest;
  hobbyInterest: HobbyInterest;
  lyfestyleInterest: LyfestyleInterest;
  travelInterest: TravelInterest;
}

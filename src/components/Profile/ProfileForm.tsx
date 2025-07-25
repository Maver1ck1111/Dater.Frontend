import { useForm} from "react-hook-form";
import { profileSchema, type ProfileDataValidation } from "../../Validators/ProfileFormValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Gender } from "../../Enums/Gender";
import { HobbyInterest } from "../../Enums/HobbyInterest";
import { BookInterest } from "../../Enums/BookInterest";
import { FoodInterest } from "../../Enums/FoodInterest";
import { MovieInterest } from "../../Enums/MovieInterest";
import { MusicInterest } from "../../Enums/MusicInterest";
import { SportInterest } from "../../Enums/SportInterest";
import { TravelInterest } from "../../Enums/TravelInterest";
import { LyfestyleInterest } from "../../Enums/LyfestyleInterest";
import type z from "zod";

type FormValues = z.infer<typeof profileSchema> & {
  _form?: string;
};

export default function ProfileForm() {
  const { formState: { errors }, register, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(profileSchema),
    mode: 'onBlur',
    defaultValues: {
      gender: Gender.Male,
      bookInterest: BookInterest.None,
      foodInterest: FoodInterest.None,
      hobbyInterest: HobbyInterest.None,
      lyfestyleInterest: LyfestyleInterest.None,
      movieInterest: MovieInterest.None,
      musicInterest: MusicInterest.None,
      sportInterest: SportInterest.None,
      travelInterest: TravelInterest.None,
    },
});

  const onSubmit = (data: ProfileDataValidation) => {
    console.log("Form data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" {...register("name")}/>
      {errors.name && <p style={{color: 'red'}}>{errors.name.message}</p>}
      <label htmlFor="description">Description</label>
      <input type="text" id="description" {...register("description")}/>
      {errors.description && <p style={{color: 'red'}}>{errors.description.message}</p>}
      <label htmlFor="date">Date of birth</label>
      <input type="date" id="date" {...register("dateOfBirth")}/>
      <label htmlFor="gender">Choose a gender</label>
      <select id="gender" {...register("gender")}>
        {Object.values(Gender).map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      <label htmlFor="hobby">Choose a hobby</label>
      <select id="hobby" {...register("hobbyInterest")}>
        {Object.values(HobbyInterest).map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      <label htmlFor="book">Choose a book interest</label>
      <select id="book" {...register("bookInterest")}>
        {Object.values(BookInterest).map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      <label htmlFor="food">Choose a food interest</label>
      <select id="food" {...register("foodInterest")}>
        {Object.values(FoodInterest).map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      <label htmlFor="movie">Choose a movie interest</label>
      <select id="movie" {...register("movieInterest")}>
        {Object.values(MovieInterest).map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      <label htmlFor="music">Choose a music interest</label>
      <select id="music" {...register("musicInterest")}>
        {Object.values(MusicInterest).map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      <label htmlFor="sport">Choose a sport interest</label>
      <select id="sport" {...register("sportInterest")}>
        {Object.values(SportInterest).map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      <label htmlFor="travel">Choose a travel interest</label>
      <select id="travel" {...register("travelInterest")}>
        {Object.values(TravelInterest).map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      <label htmlFor="lyfe">Choose a lyfe interest</label>
      <select id="lyfe" {...register("lyfestyleInterest")}>
        {Object.values(LyfestyleInterest).map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      {errors._form && <p>{errors._form.message}</p>}

      <button>Submit</button>
    </form>
  )
}

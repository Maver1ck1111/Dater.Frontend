export const MovieInterest = {
  None: "None",
  Action: "Action",
  Comedy: "Comedy",
  Drama: "Drama",
  Thriller: "Thriller",
  ScienceFiction: "ScienceFiction",
  Horror: "Horror",
  Romance: "Romance",
  Documentary: "Documentary",
  Anime: "Anime",
} as const;

export type MovieInterest = (typeof MovieInterest)[keyof typeof MovieInterest];
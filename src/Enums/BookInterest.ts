export const BookInterest = {
  None: "None",
  Fantasy: "Fantasy",
  Romance: "Romance",
  Thriller: "Thriller",
  Mystery: "Mystery",
  ScienceFiction: "ScienceFiction",
  HistoricalFiction: "HistoricalFiction",
  Classic: "Classic",
  YoungAdult: "YoungAdult",
  Horror: "Horror",
  NonFiction: "NonFiction",
} as const;
export type BookInterest = (typeof BookInterest)[keyof typeof BookInterest];
export const MusicInterest = {
  None: "None",
  Pop: "Pop",
  Rock: "Rock",
  HipHop: "HipHop",
  Jazz: "Jazz",
  Classical: "Classical",
  Electronic: "Electronic",
  Indie: "Indie",
  RnB: "RnB",
  Country: "Country",
  Reggae: "Reggae",
} as const;

export type MusicInterest = (typeof MusicInterest)[keyof typeof MusicInterest];
export const LyfestyleInterest = {
  None: "None",
  ActiveLifestyle: "ActiveLifestyle",
  Homebody: "Homebody",
  NightOwl: "NightOwl",
  EarlyBird: "EarlyBird",
  CareerDriven: "CareerDriven",
  FamilyOriented: "FamilyOriented",
  SocialButterfly: "SocialButterfly",
  Minimalist: "Minimalist",
  Adventurous: "Adventurous",
  CreativeType: "CreativeType",
} as const;

export type LyfestyleInterest = (typeof LyfestyleInterest)[keyof typeof LyfestyleInterest];
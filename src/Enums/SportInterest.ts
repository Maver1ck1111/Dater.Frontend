export const SportInterest = {
  None: "None",
  Football: "Football",
  Tennis: "Tennis",
  Basketball: "Basketball",
  Yoga: "Yoga",
  Cycling: "Cycling",
  Swimming: "Swimming",
  Boxing: "Boxing",
  Skiing: "Skiing",
} as const;

export type SportInterest = (typeof SportInterest)[keyof typeof SportInterest];
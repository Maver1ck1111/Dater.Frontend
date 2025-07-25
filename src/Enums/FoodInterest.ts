export const FoodInterest = {
    None: "None",
    Italian: "Italian",
    Japanese: "Japanese",
    Mexican: "Mexican",
    Chinese: "Chinese",
    Indian: "Indian",
    French: "French",
    AmericanBBQ: "AmericanBBQ",
    Vegetarian: "Vegetarian",
    Vegan: "Vegan",
    StreetFood: "StreetFood",
    DessertsAndBaking: "DessertsAndBaking",
} as const;

export type FoodInterest = (typeof FoodInterest)[keyof typeof FoodInterest];
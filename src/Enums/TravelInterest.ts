export const TravelInterest = {
  None: "None",
  Mountains: "Mountains",
  Sea: "Sea",
  ExoticCountries: "ExoticCountries",
  Hiking: "Hiking",
  RoadTrips: "RoadTrips",
  Cruises: "Cruises",
  CityTours: "CityTours",
  CulturalTravel: "CulturalTravel",
  AdventureTravel: "AdventureTravel",
  WellnessTravel: "WellnessTravel",
} as const;

export type TravelInterest = (typeof TravelInterest)[keyof typeof TravelInterest];
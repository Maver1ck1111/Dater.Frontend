export const HobbyInterest = {
    None: "None",
    Drawing: "Drawing",
    PlayingMusic: "PlayingMusic",
    Programming: "Programming",
    Gaming: "Gaming",
    Dancing: "Dancing",
    Photography: "Photography",
    BoardGames: "BoardGames",
    Handcrafting: "Handcrafting",
} as const;

export type HobbyInterest = (typeof HobbyInterest)[keyof typeof HobbyInterest];
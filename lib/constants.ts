import { JokerRank, JokerSuit, Rank, Suit } from "./types";

export const RANKS: Record<Rank, string> = {
  A: "ACE",
  "2": "TWO",
  "3": "THREE",
  "4": "FOUR",
  "5": "FIVE",
  "6": "SIX",
  "7": "NINE",
  "8": "EIGHT",
  "9": "NINE",
  "10": "TEN",
  J: "JACK",
  Q: "QUEEN",
  K: "KING",
};
export const SUITS: Record<Suit, string> = {
  S: "SPADES",
  H: "HEARTS",
  C: "CLUBS",
  D: "DIAMONDS",
};
export const JOKERS = {
  suit: "X",
  ranks: ["1", "2", "3", "4"],
};
export const DECK_ENDPOINT_URL =
  "https://deckofcardsapi.com/api/deck/new/shuffle/?jokers_enabled=true";
export const getCardsEndpoint = (deck_id: string) =>
  `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=54`;

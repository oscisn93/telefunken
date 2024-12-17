export type Suit = "S" | "H" | "C" | "D";
export type Rank =
  | "A"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K";

export type JokerSuit = "X";
export type JokerRank = "1" | "2" | "3" | "4";

export type Card<Type, Weight> = {
  id: string;
  image: string;
  type?: Type;
  weight?: Weight;
};

export type SuitType = Suit | JokerSuit;
export type RankValue = Rank | JokerRank;

export type Cards = Card<SuitType, RankValue>[];

export type Deck = {
  id: string;
  cards: Cards;
  shuffled: boolean;
  remaining: number;
  deck_size: number;
};

export type Player = {
  id: string;
  name?: string;
  chips: number[];
  penaltyPoints: number;
};

export type Pile = {
  id: string;
  cards: Cards;
};

export type Draw = {
  player_id: string;
  cards: Cards;
  count: number;
};

export type MeldType = "SET" | "RUN";
export type Round = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface Verifier<Round> {
  (matcher: Round, pile: Pile, isPure: boolean): boolean;
}

export type Meld<Round> = {
  id: string;
  round: Round;
  isPure: boolean;
  pile: Pile;
  verifier: Verifier<Round>;
};

export type SetMeld = Meld<"SET"> & {
  minSize: number;
  minCount: number;
};

export type RunMeld = Meld<"RUN">;

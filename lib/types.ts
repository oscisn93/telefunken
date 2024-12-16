type Suit = "SPADES"| "HEARTS" | "CLUBS"| "DIAMONDS";
type Value = 'ACE'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'JACK'
  | 'QUEEN'
  | 'KING';

type ValueKey = `${Value[number]}`;

type JokerCodes = "X1" | "X2";
export type Code = `${ValueKey}${Suit}` | JokerCodes;

export type CardValue = Value | 'JOKER'

export type ImageFormats = {
  svg: string;
  png: string;
}

export type Card = {
  code: Code;
  image: string;
  images: ImageFormats;
  value: Value;
  suit: Suit;
};

export type Deck = {
  id: string;
  shuffled: boolean;
  remaining: number;
}

export type DeckRequest = {
  deck_count: number
  shuffle: boolean;
  new: boolean;
  jokers_enabled: boolean;
}

export type DeckReshuffleRequest = {
  deck_id: string;
  remaining: boolean;
}

export type DeckShuffle = {
  success: boolean;
} & Deck;

export type DeckDrawRequest = {
  deck_id: string;
  cout: number;
}

export type DeckDraw = {
  cards: Card[];
} & DeckShuffle;
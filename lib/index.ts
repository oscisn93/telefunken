import { v4 as uuid } from "uuid";
import { JOKERS, RANKS, SUITS } from "./constants";
import type {
  Card,
  Cards,
  Suit,
  SuitType,
  Rank,
  RankValue,
  Deck,
} from "./types";

export function createDeck(): Deck | null {
  const deckCards: Cards = [];
  for (const suit in SUITS) {
    for (const rank of Object.keys(RANKS)) {
      const card: Card<Suit, Rank> = {
        id: uuid(),
        image: "",
        type: suit as Suit,
        weight: rank as Rank,
      };
      deckCards.push(card);
    }
  }
  for (const suit in SUITS) {
    for (const rank of Object.keys(RANKS)) {
      const card: Card<Suit, Rank> = {
        id: uuid(),
        image: "",
        type: suit as Suit,
        weight: rank as Rank,
      };
      deckCards.push(card);
    }
  }
  JOKERS.ranks.forEach((rank) => {
    const card = {
      id: uuid(),
      image: "",
      type: JOKERS.suit,
      weight: rank,
    } as Card<SuitType, RankValue>;
    deckCards.push(card);
  });
  const deck: Deck = {
    id: uuid(),
    cards: shuffleCards(deckCards),
    shuffled: false,
    remaining: 108,
    deck_size: 108,
  };
  return deck;
}

export function shuffleCards(cards: Cards): Cards {
  for (let i = 0; i < 108; i++) {
    const randInt = () => Math.floor(Math.random() * 108);
    const randIndexA = randInt();
    let randIndexB = randInt();

    while (randIndexA === randIndexB) {
      randIndexB = randInt();
    }

    const tmp = cards[randIndexA];

    cards[randIndexA] = cards[randIndexB];
    cards[randIndexB] = tmp;
  }
  return cards;
}

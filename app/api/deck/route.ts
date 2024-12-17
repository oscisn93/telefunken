import { v4 as uuid } from "uuid";
import { DECK_ENDPOINT_URL, getCardsEndpoint } from "@/lib/constants";

interface DeckResponse {
  success: boolean;
  deck_id: string;
  remaining: number;
  shuffle: boolean;
}

type RemoveShuffle<Type> = {
  [Property in keyof Type as Exclude<Property, "shuffle">]: Type[Property];
};

export type Card = {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  };
  value: string;
  suit: Capitalize<Lowercase<string>>;
};

type CardsResponse = RemoveShuffle<DeckResponse> & {
  cards: Array<Card>;
};

export async function GET() {
  let decks: Array<object> = [];
  let id: string = "";
  for (let decks_needed = 2; decks_needed > 0; decks_needed--) {
    let response: Response, data: CardsResponse;

    try {
      response = await fetch(DECK_ENDPOINT_URL, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { success, deck_id }: DeckResponse = await response.json();
      id = deck_id;
      if (!success) {
        throw new Error(
          "Failed to generate a new deck. Please try again later.",
        );
      }
      response = await fetch(getCardsEndpoint(deck_id), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      data = await response.json();
      if (!data.success) {
        throw new Error(
          "Failed to fetch the deck of cards with that deck_id, has it already been consumed?",
        );
      }
      decks = decks.concat(data.cards);
    } catch (err) {
      console.error(err);
    }
  }
  return Response.json({ data: { id, decks, remaining: 108 } });
}

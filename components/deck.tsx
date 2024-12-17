"use client";

import { use, useEffect, useState } from "react";
import type { Card } from "@/app/api/deck/route";

function getLocalstorageDeck(): Card[] | null {
  return JSON.parse(localStorage.getItem("deck[cards]") || "null");
}

export default function Deck() {
  const [cards, setCards] = useState<Array<Card> | null>(() =>
    getLocalstorageDeck(),
  );
  const [deckId, setDeckId] = useState<string>("");

  useEffect(() => {
    async function fetchCardDeck() {
      const response = await fetch("http://localhost:3000/api/deck");
      const { data } = await response.json();
      setCards(data.cards);
      localStorage.setItem("deck[cards]", JSON.stringify(data.decks));
      localStorage.setItem("deck[id]", data.id);
      localStorage.setItem("deck[remaining]", data.remaining);
    }
    if (!localStorage.getItem("deck[id]")) {
      fetchCardDeck();
    } else {
      const deck = getLocalstorageDeck();
      setCards(deck);
    }
  }, []);

  if (!cards) return <div>Loading... </div>;
  return (
    <div className="flex flex-wrap items-center justify-center">
      {cards.map((card, idx) => (
        <div key={idx}>
          <img src={card.image} alt={`${card.value} of ${card.suit}`} />
        </div>
      ))}
    </div>
  );
}

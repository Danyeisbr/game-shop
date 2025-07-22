"use client";

import { useCartStatus } from "@/hooks/useCartStatus";
import CartActionButton from "./CartActionButton";
import type { Game } from "../types/game";
import GameImage from "./GameImage";
import GameInfo from "./GameInfo";
import NewBadge from "./NewBadge";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const { isInCart, toggleCart } = useCartStatus(game);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <GameImage src={game.image} alt={game.name} />
        {game.isNew && <NewBadge />}
      </div>

      <div className="p-4">
        <GameInfo game={game} />
        <CartActionButton isInCart={isInCart} onClick={toggleCart} />
      </div>
    </div>
  );
}

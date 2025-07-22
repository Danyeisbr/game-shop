"use client";

import CartActionButton from "@/components/cart/CartActionButton";
import { useCartStatus } from "@/hooks/useCartStatus";
import type { GameCardProps } from "@/types";
import GameImage from "./GameImage";
import GameInfo from "./GameInfo";
import NewBadge from "./NewBadge";


export default function GameCard({
  game,
  priority = false,
}: GameCardProps & { priority?: boolean }) {
  const { isInCart, toggleCart } = useCartStatus(game);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <GameImage src={game.image} alt={game.name} priority={priority} />
        {game.isNew && <NewBadge />}
      </div>

      <div className="p-4">
        <GameInfo game={game} />
        <CartActionButton isInCart={isInCart} onClick={toggleCart} />
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { cartService } from "../services/cartService";
import type { Game } from "../types/game";
import Image from "next/image";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setIsInCart(cartService.isInCart(game.id));
  }, [game.id]);

  const handleCartAction = useCallback(() => {
    if (isInCart) {
      cartService.removeFromCart(game.id);
      setIsInCart(false);
    } else {
      cartService.addToCart(game);
      setIsInCart(true);
    }
  }, [isInCart, game]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Image
          src={game.image || "/placeholder.svg?height=200&width=300"}
          alt={game.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
          priority={false}
        />
        {game.isNew && (
          <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded font-medium">
            New
          </span>
        )}
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-500 uppercase font-medium mb-1">
          {game.genre}
        </p>
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {game.name}
        </h3>
        <p className="text-lg font-bold text-gray-900 mb-3">
          ${game.price.toFixed(2)}
        </p>

        <button
          onClick={handleCartAction}
          className={`w-full py-2 px-4 rounded text-sm font-medium transition-colors ${
            isInCart
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          {isInCart ? "REMOVE" : "ADD TO CART"}
        </button>
      </div>
    </div>
  );
}

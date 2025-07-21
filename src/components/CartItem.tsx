"use client";

import type { Game } from "../types/game";
import { X } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  game: Game;
  onRemove: (gameId: string) => void;
}

export default function CartItem({ game, onRemove }: CartItemProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
      <div className="relative">
        <Image
          src={game.image || "/placeholder.svg?height=80&width=120"}
          alt={game.name}
          width={120}
          height={80}
          className="rounded object-cover"
        />
        {game.isNew && (
          <span className="absolute -top-1 -right-1 bg-green-500 text-white px-1 py-0.5 text-xs rounded">
            New
          </span>
        )}
      </div>

      <div className="flex-1">
        <p className="text-sm text-gray-500 uppercase">{game.genre}</p>
        <h3 className="font-semibold text-gray-900">{game.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{game.description}</p>
      </div>

      <div className="text-right">
        <p className="font-bold text-lg">${game.price}</p>
        <button
          onClick={() => onRemove(game.id)}
          className="mt-2 p-1 text-red-600 hover:text-red-800"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

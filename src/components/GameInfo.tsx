import type { GameInfoProps } from "@/types";

export default function GameInfo({ game }: GameInfoProps) {
  return (
    <>
      <p className="text-sm text-gray-500 uppercase font-medium mb-1">
        {game.genre}
      </p>
      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
        {game.name}
      </h3>
      <p className="text-lg font-bold text-gray-900 mb-3">
        ${game.price.toFixed(2)}
      </p>
    </>
  );
}

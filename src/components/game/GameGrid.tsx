import type { GameGridProps } from "@/types";
import GameCard from "./GameCard";

export default function GameGrid({ games }: GameGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {games.map((game, idx) => (
        <GameCard key={game.id} game={game} priority={idx === 0} />
      ))}
    </div>
  );
}

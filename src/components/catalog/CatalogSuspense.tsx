import LoadingSpinner from "@/components/shared/LoadingSpinner";
import GameList from "@/components/game/GameList";
import { Suspense } from "react";

export default function CatalogSuspense() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <GameList />
    </Suspense>
  );
}

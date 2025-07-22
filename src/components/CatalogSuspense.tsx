import LoadingSpinner from "./LoadingSpinner";
import GameList from "./GameList";
import { Suspense } from "react";

export default function CatalogSuspense() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <GameList />
    </Suspense>
  );
}

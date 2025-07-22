import { gameService } from "@/services/gameService";
import { DEFAULT_GENRE } from "@/constants/texts";
import { useEffect, useState } from "react";

export function useGenres() {
  const [genres, setGenres] = useState<string[]>([DEFAULT_GENRE]);

  useEffect(() => {
    gameService.getAvailableGenres().then(setGenres);
  }, []);

  return genres;
}

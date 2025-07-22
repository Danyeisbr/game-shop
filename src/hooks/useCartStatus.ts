import { useState, useEffect, useCallback } from "react";
import { cartService } from "@/services/cartService";
import type { Game } from "@/types";

export function useCartStatus(game: Game) {
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setIsInCart(cartService.isInCart(game.id));
  }, [game.id]);

  const toggleCart = useCallback(() => {
    if (isInCart) {
      cartService.removeFromCart(game.id);
      setIsInCart(false);
    } else {
      cartService.addToCart(game);
      setIsInCart(true);
    }
  }, [isInCart, game]);

  return { isInCart, toggleCart };
}

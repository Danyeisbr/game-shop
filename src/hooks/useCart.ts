import { cartService } from "@/services/cartService";
import { useState, useEffect } from "react";
import type { Game } from "@/types";

export function useCart() {
  const [cartItems, setCartItems] = useState<Game[]>([]);

  useEffect(() => {
    setCartItems(cartService.getCartItems());
  }, []);

  const removeItem = (gameId: string) => {
    cartService.removeFromCart(gameId);
    setCartItems(cartService.getCartItems());
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return { cartItems, removeItem, total };
}

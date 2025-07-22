import type { Game } from "@/types";
import {
  CART_STORAGE_KEY,
  ERROR_CONTEXT_READING_CART,
  ERROR_CONTEXT_ADDING_TO_CART,
  ERROR_CONTEXT_REMOVING_FROM_CART,
  ERROR_CONTEXT_CLEARING_CART,
  PRODUCTION_ENV,
} from "@/constants/resources";

class CartService {
  private storageKey = CART_STORAGE_KEY;

  getCartItems(): Game[] {
    if (typeof window === "undefined") return [];
    try {
      const items = localStorage.getItem(this.storageKey);
      const parsed = items ? JSON.parse(items) : [];
      if (Array.isArray(parsed)) {
        return parsed;
      }
      return [];
    } catch (error) {
      this.logError(ERROR_CONTEXT_READING_CART, error);
      return [];
    }
  }

  addToCart(game: Game): void {
    if (typeof window === "undefined") return;
    try {
      const items = this.getCartItems();
      if (!items.some((item) => item.id === game.id)) {
        const updated = [...items, game];
        localStorage.setItem(this.storageKey, JSON.stringify(updated));
      }
    } catch (error) {
      this.logError(ERROR_CONTEXT_ADDING_TO_CART, error);
    }
  }

  removeFromCart(gameId: string): void {
    if (typeof window === "undefined") return;
    try {
      const items = this.getCartItems();
      const updated = items.filter((item) => item.id !== gameId);
      localStorage.setItem(this.storageKey, JSON.stringify(updated));
    } catch (error) {
      this.logError(ERROR_CONTEXT_REMOVING_FROM_CART, error);
    }
  }

  isInCart(gameId: string): boolean {
    return this.getCartItems().some((item) => item.id === gameId);
  }

  getCartCount(): number {
    return this.getCartItems().length;
  }

  clearCart(): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.removeItem(this.storageKey);
    } catch (error) {
      this.logError(ERROR_CONTEXT_CLEARING_CART, error);
    }
  }

  private logError(context: string, error: unknown) {
    if (process.env.NODE_ENV !== PRODUCTION_ENV) {
      console.error(`Error ${context}:`, error);
    }
  }
}

export const cartService = new CartService();

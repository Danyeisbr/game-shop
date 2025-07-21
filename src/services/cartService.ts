import type { Game } from "../types/game";

class CartService {
  private storageKey = "gamershop-cart";

  getCartItems(): Game[] {
    if (typeof window === "undefined") return [];

    try {
      const items = localStorage.getItem(this.storageKey);
      return items ? JSON.parse(items) : [];
    } catch (error) {
      console.error("Error reading cart from localStorage:", error);
      return [];
    }
  }

  addToCart(game: Game): void {
    if (typeof window === "undefined") return;

    try {
      const items = this.getCartItems();
      const existingItem = items.find((item) => item.id === game.id);

      if (!existingItem) {
        items.push(game);
        localStorage.setItem(this.storageKey, JSON.stringify(items));
        console.log("Added to cart:", game.name);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  }

  removeFromCart(gameId: string): void {
    if (typeof window === "undefined") return;

    try {
      const items = this.getCartItems();
      const filteredItems = items.filter((item) => item.id !== gameId);
      localStorage.setItem(this.storageKey, JSON.stringify(filteredItems));
      console.log("Removed from cart:", gameId);
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  }

  isInCart(gameId: string): boolean {
    const items = this.getCartItems();
    return items.some((item) => item.id === gameId);
  }

  getCartCount(): number {
    return this.getCartItems().length;
  }

  clearCart(): void {
    if (typeof window === "undefined") return;

    try {
      localStorage.removeItem(this.storageKey);
      console.log("Cart cleared");
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  }
}

export const cartService = new CartService();

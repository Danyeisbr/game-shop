"use client";

import { cartService } from "../../services/cartService";
import CartItem from "../../components/CartItem";
import type { Game } from "../../types/game";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<Game[]>([]);

  useEffect(() => {
    setCartItems(cartService.getCartItems());
  }, []);

  const handleRemoveItem = (gameId: string) => {
    cartService.removeFromCart(gameId);
    setCartItems(cartService.getCartItems());
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link href="/" className="text-blue-600 hover:text-blue-800 mr-4">
          ← Back to Catalog
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
          <p className="text-gray-600 mb-6">{cartItems.length} items</p>

          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <Link
                href="/"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  game={item}
                  onRemove={handleRemoveItem}
                />
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>{cartItems.length} items</span>
                </div>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Order Total</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-gray-800 text-white py-3 rounded mt-4 hover:bg-gray-700">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

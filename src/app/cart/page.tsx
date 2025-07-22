"use client";

import { CART_TITLE, CART_ITEMS, BACK_TO_CATALOG } from "@/constants/resources";
import OrderSummary from "@/components/cart/OrderSummary";
import CartEmpty from "@/components/cart/CartEmpty";
import CartItem from "@/components/cart/CartItem";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, removeItem, total } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link href="/" className="text-blue-600 hover:text-blue-800 mr-4">
          {BACK_TO_CATALOG}
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold mb-4">{CART_TITLE}</h1>
          <p className="text-gray-600 mb-6">
            {cartItems.length} {CART_ITEMS}
          </p>

          {cartItems.length === 0 ? (
            <CartEmpty />
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <CartItem key={item.id} game={item} onRemove={removeItem} />
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="lg:col-span-1">
            <OrderSummary items={cartItems} total={total} />
          </div>
        )}
      </div>
    </div>
  );
}

import type { OrderSummaryProps } from "@/types";
import {
  ORDER_SUMMARY,
  ORDER_TOTAL,
  CHECKOUT,
  CART_ITEMS,
} from "@/constants/resources";

export default function OrderSummary({ items, total }: OrderSummaryProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">{ORDER_SUMMARY}</h2>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>
            {items.length} {CART_ITEMS}
          </span>
        </div>
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="border-t pt-4">
        <div className="flex justify-between font-bold text-lg">
          <span>{ORDER_TOTAL}</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <button className="w-full bg-gray-800 text-white py-3 rounded mt-4 hover:bg-gray-700">
        {CHECKOUT}
      </button>
    </div>
  );
}

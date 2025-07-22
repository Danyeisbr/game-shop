import { ADD_TO_CART, REMOVE_FROM_CART } from "@/constants/texts";
import type { CartActionButtonProps } from "@/types";

export default function CartActionButton({
  isInCart,
  onClick,
}: CartActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full py-2 px-4 rounded text-sm font-medium transition-colors ${
        isInCart
          ? "bg-red-600 text-white hover:bg-red-700"
          : "bg-gray-800 text-white hover:bg-gray-700"
      }`}
    >
      {isInCart ? REMOVE_FROM_CART : ADD_TO_CART}
    </button>
  );
}

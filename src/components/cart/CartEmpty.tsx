import { CART_EMPTY, CONTINUE_SHOPPING } from "@/constants/resources";
import Link from "next/link";

export default function CartEmpty() {
  return (
    <div className="text-center py-8">
      <p className="text-gray-500 mb-4">{CART_EMPTY}</p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {CONTINUE_SHOPPING}
      </Link>
    </div>
  );
}

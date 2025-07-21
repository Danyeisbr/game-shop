import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="shadow-sm" style={{ backgroundColor: "#EEEEEE" }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-900">
            GamerShop
          </Link>
          <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
          </Link>
        </div>
      </div>
    </header>
  );
}

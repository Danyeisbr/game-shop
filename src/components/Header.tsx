import { APP_NAME } from "@/constants/texts";
import { ShoppingCart } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import NavLink from "@/components/NavLink";

export default function Header() {
  return (
    <header className="shadow-sm bg-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <NavLink
            href={ROUTES.HOME}
            className="text-xl font-bold text-gray-900"
          >
            {APP_NAME}
          </NavLink>
          <NavLink
            href={ROUTES.CART}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ShoppingCart className="w-6 h-6 text-gray-700" />
          </NavLink>
        </div>
      </div>
    </header>
  );
}

import { ROUTES } from "@/constants/routes";
import ApplyDigitalLogo from "./Logo";
import NavLink from "./NavLink";

export default function Footer() {
  return (
    <footer className="footer-bg text-white py-8 px-4 w-full">
      <div className="container mx-auto flex justify-center items-center">
        <NavLink
          href={ROUTES.HOME}
          className="inline-block hover:opacity-80 transition-opacity"
        >
          <ApplyDigitalLogo className="w-[1200px] h-auto max-w-full" />
        </NavLink>
      </div>
    </footer>
  );
}

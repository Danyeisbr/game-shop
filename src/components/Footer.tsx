import ApplyDigitalLogo from "./Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="text-white py-8 px-4"
      style={{ backgroundColor: "#404040" }}
    >
      <div className="container mx-auto flex justify-center items-center">
        <Link
          href="/"
          className="inline-block hover:opacity-80 transition-opacity"
        >
          <ApplyDigitalLogo className="w-[1200px] h-auto max-w-full" />
        </Link>
      </div>
    </footer>
  );
}

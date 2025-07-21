import ApplyDigitalLogo from "./Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "#404040" }}>
      <Link
        href="/"
        className="inline-block hover:opacity-80 transition-opacity"
      >
        <div className="">
          <ApplyDigitalLogo />
        </div>
      </Link>
    </footer>
  );
}

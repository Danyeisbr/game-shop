import type { NavLinkProps } from "@/types";
import Link from "next/link";

export default function NavLink({ href, className, children }: NavLinkProps) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

import Link from "next/link";

export default function NavLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

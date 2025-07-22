export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="flex-1 bg-gray-50">{children}</main>;
}

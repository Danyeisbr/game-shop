import type { WithChildren } from "@/types";

export default function MainContent({ children }: WithChildren) {
  return <main className="flex-1 bg-gray-50">{children}</main>;
}

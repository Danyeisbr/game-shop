import type { WithChildren } from "@/types";
import HeaderShell from "./HeaderShell";
import MainContent from "./MainContent";
import Footer from "./Footer";

export default function AppShell({ children }: WithChildren) {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderShell />
      <MainContent>{children}</MainContent>
      <Footer />
    </div>
  );
}

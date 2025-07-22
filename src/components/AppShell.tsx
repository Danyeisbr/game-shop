import HeaderShell from "./HeaderShell";
import MainContent from "./MainContent";
import Footer from "./Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderShell />
      <MainContent>{children}</MainContent>
      <Footer />
    </div>
  );
}

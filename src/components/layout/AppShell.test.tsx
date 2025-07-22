import { render, screen } from "@testing-library/react";
import AppShell from "./AppShell";
import "@testing-library/jest-dom";

describe("AppShell", () => {
  it("renderiza el layout y el contenido hijo", () => {
    render(
      <AppShell>
        <div>Contenido app</div>
      </AppShell>
    );
    expect(screen.getByText("Contenido app")).toBeInTheDocument();
    expect(screen.getByRole("banner")).toBeInTheDocument(); 
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});

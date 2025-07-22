import { render, screen } from "@testing-library/react";
import MainContent from "./MainContent";
import "@testing-library/jest-dom";

describe("MainContent", () => {
  it("renderiza el contenido hijo", () => {
    render(
      <MainContent>
        <div>Contenido principal</div>
      </MainContent>
    );
    expect(screen.getByText("Contenido principal")).toBeInTheDocument();
  });
});

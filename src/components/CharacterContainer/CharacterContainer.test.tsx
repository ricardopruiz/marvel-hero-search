import { render, screen } from "@testing-library/react";
import CharacterContainer from ".";
import styles from "./CharacterContainer.module.scss";

describe("CharacterContainer", () => {
  it("renders children", () => {
    render(
      <CharacterContainer>
        <div>test</div>
      </CharacterContainer>
    );

    const childElement = screen.getByText("test");

    expect(childElement).toBeInTheDocument();
  });

  it("shows small size when its selected", () => {
    render(
      <CharacterContainer size="small">
        <div>test</div>
      </CharacterContainer>
    );

    const container = screen.getByText("test").parentElement;

    expect(container).toHaveClass(styles["caracter-container--small-clip"]);
  });

  it("shows big size when its selected", () => {
    render(
      <CharacterContainer size="big">
        <div>test</div>
      </CharacterContainer>
    );

    const container = screen.getByText("test").parentElement;

    expect(container).toHaveClass(styles["caracter-container--big-clip"]);
  });
});

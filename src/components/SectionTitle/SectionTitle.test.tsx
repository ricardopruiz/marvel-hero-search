import { render, screen } from "@testing-library/react";
import SectionTitle from ".";
import styles from "./SectionTitle.module.scss";

describe("SectionTitle Component", () => {
  it("renders with the provided children", () => {
    const text = "title";

    render(<SectionTitle>{text}</SectionTitle>);

    const title = screen.getByText(text);

    expect(title).toHaveTextContent(text);
  });

  it("apply the CSS class", () => {
    const text = "title";

    render(<SectionTitle>{text}</SectionTitle>);

    const title = screen.getByText(text);

    expect(title).toHaveClass(styles["section-title"]);
  });
});

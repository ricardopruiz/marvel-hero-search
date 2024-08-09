import { render, screen } from "@testing-library/react";
import ErrorMessage from ".";
import { faker } from "@faker-js/faker";

describe("ErrorMessage", () => {
  it("renders the given message", () => {
    const message = faker.lorem.sentence();
    render(<ErrorMessage message={message} />);
    const renderedMessage = screen.getByText(`ERROR: ${message}`);

    expect(renderedMessage).toBeInTheDocument();
  });
});

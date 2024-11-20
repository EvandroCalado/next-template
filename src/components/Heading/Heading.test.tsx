import { render, screen } from "@testing-library/react";

import { Heading } from ".";

describe("<Heading />", () => {
  it("should render", () => {
    render(<Heading>Heading</Heading>);

    expect(
      screen.getByRole("heading", { level: 1, name: "Heading" })
    ).toBeInTheDocument();
  });
});

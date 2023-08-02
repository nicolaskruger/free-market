import { Jest } from "./jest";
import { render, screen } from "@testing-library/react";

describe("<Jest/>", () => {
  it("should render", () => {
    render(<Jest />);

    expect(screen.queryByText("hey")).toBeInTheDocument();
  });
});

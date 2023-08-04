import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Password } from "./password";

describe("password", () => {
  it("should hide and show password when click on the button", async () => {
    render(<Password />);

    const button = screen.getByTestId<HTMLButtonElement>("button-password");
    const input = screen.getByTestId<HTMLInputElement>("input-password");

    expect(input.type).toBe("password");
    expect(button.textContent).toBe("show");

    await user.click(button);

    expect(input.type).toBe("text");
    expect(button.textContent).toBe("hide");
  });
});

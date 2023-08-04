"use client";

import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";

type PasswordProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Password = ({ ...props }: PasswordProps) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <input
        data-testid="input-password"
        type={show ? "text" : "password"}
        {...props}
      />
      <button data-testid="button-password">{show ? "hide" : "show"}</button>
    </>
  );
};

export { Password };

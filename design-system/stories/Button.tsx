import React from "react";
import "./button.css";

export interface IButtonProps {
  primary: boolean;
  size: string;
  label: string;
}

export const Button = ({ primary, size, label }: IButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
    >
      {label}
    </button>
  );
};

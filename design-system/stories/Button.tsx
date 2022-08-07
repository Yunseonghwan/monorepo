import React from "react";
import styled from "styled-components";

export interface IButtonProps {
  primary: boolean;
  size: string;
  label: string;
}

export const Button = ({ primary, size, label }: IButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return <ButtonStyle>{label}</ButtonStyle>;
};

const ButtonStyle = styled.div``;

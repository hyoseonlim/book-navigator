import styled from "styled-components";

interface ButtonProps {
  category: string;
}

const variantStyles: Record<
  string,
  { backgroundColor: string; color?: string }
> = {
  beige: { backgroundColor: "#F5EEDC" },
  gray: { backgroundColor: "#bccbd2" },
  black: { backgroundColor: "#3a3b42" },
};

const defaultStyle = {
  fontSize: "14px",
  color: "#fff",
  backgroundColor: "#ed798d",
};

export const Button = styled.button<ButtonProps>`
  border: 3px groove #5a8a97;
  cursor: pointer;
  border-radius: 5px;
  padding: 8px;
  width: 90%;
  height: 2.5rem;
  margin: 2px 0;
  font-family: Poor Story;

  background-color: ${({ category }) =>
    variantStyles[category]?.backgroundColor || defaultStyle.backgroundColor};

  &:hover {
    opacity: 0.9;
  }
`;

export default Button;

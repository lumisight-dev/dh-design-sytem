import React from "react";
import "./styles.scss";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="c-button">{props.label}</button>;
};

export default Button;

import cn from "classnames";
import React from "react";
import "../globalStyles.scss";
import "./styles.scss";

const DHTag: React.FC<Props> = ({
  children,
  className,
  size = "is-normal",
  variant = "is-primary",
  isLight = false,
  fullWidth,
  backgroundColor,
  color,
  id = "tag",
  ...props
}) => {
  return (
    <span
      className={cn("tag", className, variant, size, { "is-light": isLight })}
      style={{
        width: fullWidth ? "100%" : "auto",
        backgroundColor:
          variant === "is-customize" && backgroundColor ? backgroundColor : "",
        color: variant === "is-customize" && color ? color : "",
      }}
      id={id}
      {...props}
    >
      {children}
    </span>
  );
};
export type TagVariant =
  | "is-black"
  | "is-dark"
  | "is-light"
  | "is-white"
  | "is-primary"
  | "is-link"
  | "is-info"
  | "is-success"
  | "is-warning"
  | "is-danger"
  | "is-customize";
export type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  variant?: TagVariant;
  isLight?: boolean;
  size?: "is-normal" | "is-medium" | "is-large";
  fullWidth?: boolean;
  backgroundColor?: string;
  color?: string;
  className?: string;
  id?: string;
};

export default DHTag;

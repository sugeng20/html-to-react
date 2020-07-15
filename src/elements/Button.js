import React from "react";
import propTypes from "prop-types";

export default function Button(props) {
  const className = ["button"];
  if (props.isPrimary) className.push("button-primary");
  if (props.isWideMobile) className.push("button-wide-mobil");
  if (props.isSmall) className.push("button-sm");
  return <button className={className.join(" ")}>{props.children}</button>;
}

Button.propTypes = {
  isPrimary: propTypes.string,
  isWideMobile: propTypes.string,
  isSmall: propTypes.string,
};

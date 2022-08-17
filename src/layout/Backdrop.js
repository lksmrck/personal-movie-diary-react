import React from "react";
import { StyledBackdrop } from "./styled";

export default function Backdrop(props) {
  return <StyledBackdrop>{props.children}</StyledBackdrop>;
}

import * as React from "react";

const CloseIcon = (props: any) => (
  <svg height={20} width={20} style={props.style} {...props}>
    <path
      fill={props.color ? props.color : "gray"}
      d="M6.062 15 5 13.938 8.938 10 5 6.062 6.062 5 10 8.938 13.938 5 15 6.062 11.062 10 15 13.938 13.938 15 10 11.062Z"
    />
  </svg>
);

export default CloseIcon;

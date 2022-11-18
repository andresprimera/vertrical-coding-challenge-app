import * as React from "react";

const ChevronLeftIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
    <path
      fill={props.color ? props.color : "gray"}
      d="M10 22 0 12 10 2l1.775 1.775L3.55 12l8.225 8.225Z"
    />
  </svg>
);

export default ChevronLeftIcon;

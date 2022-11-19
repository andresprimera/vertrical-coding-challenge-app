import * as React from "react";

const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
    <path
      fill={props.color ? props.color : "gray"}
      d="M8.025 22 6.25 20.225 14.475 12 6.25 3.775 8.025 2l10 10Z"
    />
  </svg>
);

export default ChevronRightIcon;

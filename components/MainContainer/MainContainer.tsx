import React, { PropsWithChildren } from "react";

import { useGetScreenSize } from "hooks/useGetScreenSize";

import styles from "./styles.module.css";

import { HEADER_HEIGHT } from "metrics";

export const MainContainer = ({ children }: PropsWithChildren) => {
  const { screenSize } = useGetScreenSize();
  return (
    <div
      className={styles.container}
      style={{ height: screenSize.height - HEADER_HEIGHT }}
    >
      {children}
    </div>
  );
};

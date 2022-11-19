import React, { PropsWithChildren } from "react";

import { useGetScreenSize } from "hooks/useGetScreenSize";

import styles from "./styles.module.css";

export const MainContainer = ({ children }: PropsWithChildren) => {
  const { screenSize, headerHeight } = useGetScreenSize();
  return (
    <div
      className={styles.container}
      style={{ height: screenSize.height - headerHeight }}
    >
      {children}
    </div>
  );
};

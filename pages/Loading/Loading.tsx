import React from "react";

import Logo from "../../public/svgs/logo";

import { useGetScreenSize } from "hooks/useGetScreenSize";

import styles from "./styles.module.css";

export const LoadingScreen = () => {
  const { screenSize } = useGetScreenSize();

  const logoWidth = screenSize.width < 600 ? "70%" : 400;
  const logoHeight = screenSize.width < 600 ? 50 : (logoWidth as number) / 5.25;

  return (
    <div className={styles.container} style={{ height: screenSize.height }}>
      <h1 className={styles.title}>Welcome</h1>
      <h1 className={styles.title}>To</h1>
      <Logo width={logoWidth} height={logoHeight} />
    </div>
  );
};

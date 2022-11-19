import React from "react";
import Logo from "public/svgs/logo";

import styles from "./styles.module.css";
import { useGetScreenSize } from "hooks/useGetScreenSize";

export const Header = () => {
  const { headerHeight } = useGetScreenSize();

  return (
    <section className={styles.container} style={{ height: headerHeight }}>
      <Logo />
      <h2>Coding Challenge</h2>
    </section>
  );
};

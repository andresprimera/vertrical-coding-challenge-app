import React from "react";
import Logo from "public/svgs/logo";

import { HEADER_HEIGHT } from "metrics";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <section className={styles.container} style={{ height: HEADER_HEIGHT }}>
      <Logo />
      <h2>Coding Challenge</h2>
    </section>
  );
};

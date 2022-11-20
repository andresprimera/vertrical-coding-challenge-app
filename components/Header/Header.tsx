import React from "react";
import { motion } from "framer-motion";

import Logo from "assets/svgs/logo";

import styles from "./styles.module.css";
import { useGetScreenSize } from "hooks/useGetScreenSize";

export const Header = () => {
  const { headerHeight } = useGetScreenSize();

  return (
    <motion.div
      initial={{ translateY: -headerHeight }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className={styles.container} style={{ height: headerHeight }}>
        <Logo />
        <h2>Coding Challenge</h2>
      </section>
    </motion.div>
  );
};

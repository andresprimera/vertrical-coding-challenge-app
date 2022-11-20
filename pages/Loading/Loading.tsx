import React from "react";
import { motion } from "framer-motion";

import Logo from "../../assets/svgs/logo";

import { useGetScreenSize } from "hooks/useGetScreenSize";

import styles from "./styles.module.css";

export default function LoadingScreen() {
  const { screenSize } = useGetScreenSize();

  const logoWidth = screenSize.width < 600 ? "70vw" : 400;
  const logoHeight = screenSize.width < 600 ? 50 : (logoWidth as number) / 5.25;

  return (
    <div className={styles.container} style={{ height: screenSize.height }}>
      <motion.div
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className={styles.title}>Welcome</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h1 className={styles.title}>To</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Logo width={logoWidth} height={logoHeight} />
      </motion.div>
    </div>
  );
}

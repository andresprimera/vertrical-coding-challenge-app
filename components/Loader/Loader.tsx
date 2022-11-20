import React from "react";
import { motion } from "framer-motion";

import styles from "./styles.module.css";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 2 }}
      transition={{ repeat: Infinity, duration: 0.7 }}
    >
      <div className={styles.container}>
        <h3 className={styles.text}>{"Loading"}</h3>
      </div>
      <div className={styles.filler}>{""}</div>
    </motion.div>
  );
}

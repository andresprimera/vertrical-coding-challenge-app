import React from "react";
import { useRouter } from "next/router";

import styles from "./styles.module.css";
import ChevronLeftIcon from "public/svgs/ChevronLeftIcon";

export const BackButton = () => {
  const router = useRouter();
  return (
    <div className={styles.container} onClick={() => router.back()}>
      <ChevronLeftIcon color={"var(--color-primary)"} />
      <h3 className={styles.text}>Back</h3>
    </div>
  );
};

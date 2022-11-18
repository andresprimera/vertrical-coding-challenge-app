import React from "react";

import { MainContainer, BackButton, Header } from "components";

import styles from "./styles.module.css";

export default function DetailsScreen() {
  return (
    <>
      <Header />
      <BackButton />
      <MainContainer>
        <div className={styles.container}>
          <div className={styles.col1}>Picture</div>
          <div className={styles.col2}>
            <h2 className={styles.title}>title</h2>
            <p>Description larga</p>
          </div>
        </div>
        <div className={styles.filler}>{""}</div>
      </MainContainer>
    </>
  );
}

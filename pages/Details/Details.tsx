import React, { useContext } from "react";

import { useRouter } from "next/router";
import { StoreContext } from "context";

import { ResponseUI } from "context/data/interfaces";

import { MainContainer, BackButton, Header } from "components";

import styles from "./styles.module.css";

export default function DetailsScreen() {
  const router = useRouter();
  const selection = router.query.selection;

  const { state } = useContext(StoreContext);
  const { dataState } = state;
  const { data } = dataState;

  let selectedItem = data.find(
    (element: ResponseUI) => element.id === selection
  );

  const {
    photo = "",
    shortDescription = "",
    title = "",
    description = "",
    id = "",
  } = selectedItem;

  return (
    <>
      <Header />
      <BackButton />
      <MainContainer>
        <div className={styles.container}>
          <div className={styles.col1}>{photo}</div>
          <div className={styles.col2}>
            <h2 className={styles.title}>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className={styles.filler}>{""}</div>
      </MainContainer>
    </>
  );
}

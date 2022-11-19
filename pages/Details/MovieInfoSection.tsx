import React from "react";

import { ResponseUI } from "context/movies/interfaces";

import styles from "./styles.module.css";

export const MovieSectionSection = ({
  selectedMovie,
}: {
  selectedMovie: ResponseUI;
}) => {
  return (
    <div className={styles.col2}>
      <h2 className={styles.title}>{selectedMovie?.title}</h2>
      <p>{selectedMovie?.description}</p>
    </div>
  );
};

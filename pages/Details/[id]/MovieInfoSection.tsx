import React from "react";

import { MovieUI } from "context/movies/interfaces";

import styles from "./styles.module.css";

export default function MovieSectionSection({
  selectedMovie,
}: {
  selectedMovie: MovieUI;
}) {
  return (
    <div className={styles.col2}>
      <h2 className={styles.title}>{selectedMovie?.title}</h2>
      <p>{selectedMovie?.description}</p>
    </div>
  );
}

import React, { useContext } from "react";
import { useRouter } from "next/router";

import { StoreContext } from "context";

import { MainContainer, BackButton, Header } from "components";

import { MovieSectionSection } from "./MovieInfoSection";
import { PictureSection } from "./PictureSection";

import { ResponseUI } from "context/movies/interfaces";

import styles from "./styles.module.css";

export default function DetailsScreen() {
  const router = useRouter();
  const selection = router.query.selection;

  const { state } = useContext(StoreContext);
  const { moviesState } = state;
  const { movies } = moviesState;

  let selectedMovie = movies.find(
    (movie: ResponseUI) => movie._id === selection
  );

  return (
    <div className={styles.container}>
      <Header />
      <BackButton />
      <MainContainer>
        <div className={styles.innerContainer}>
          {selectedMovie ? (
            <>
              <PictureSection selectedMovie={selectedMovie} />
              <MovieSectionSection selectedMovie={selectedMovie} />
            </>
          ) : (
            <div className={styles.movieNotFoundContainer}>
              <h1>Movie not found</h1>
            </div>
          )}
        </div>
        <div className={styles.filler}>{""}</div>
      </MainContainer>
    </div>
  );
}

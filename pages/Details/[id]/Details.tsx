import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import { StoreContext } from "context";

import MovieSectionSection from "./MovieInfoSection";
import PictureSection from "./PictureSection";

import { MoviesStateUI, MovieUI } from "context/movies/interfaces";

import styles from "./styles.module.css";
import HomeLayout from "components/Layout";

export default function DetailsScreen() {
  const router = useRouter();
  const selection = router.query.id;

  const { state } = useContext(StoreContext);
  const { moviesState } = state;
  const { movies } = moviesState as MoviesStateUI;

  let selectedMovie = movies.find((movie: MovieUI) => movie._id === selection);

  return (
    <HomeLayout backButton={true}>
      <>
        <motion.div
          initial={{ opacity: 0, translateX: 20 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.7 }}
          className={styles.innerContainer}
        >
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
        </motion.div>
        <div className={styles.filler}>{""}</div>
      </>
    </HomeLayout>
  );
}

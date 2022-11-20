import React, { useContext } from "react";

import ResponseCard from "./ResponseCard";

import { MoviesStateUI, MovieUI, StoreUI } from "context/movies/interfaces";

import styles from "./styles.module.css";
import Loader from "components/Loader";
import { StoreContext } from "context";

export default function SearchResults({ movies }: { movies: MovieUI[] | [] }) {
  const { state } = useContext<StoreUI>(StoreContext);
  const { moviesState } = state;
  const { loading } = moviesState as MoviesStateUI;

  let renderMovies = false;
  renderMovies = movies && movies.length !== 0;

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.searchResults}>
      {renderMovies ? (
        movies.map((item, index) => {
          return (
            <ResponseCard
              key={`${item._id}-${index}`}
              index={index}
              {...item}
            />
          );
        })
      ) : (
        <>
          <div className={styles.noInfoContainer}>
            <h3 className={styles.noInfoText}>
              {"There are no movies to show yet"}
            </h3>
          </div>
          <div className={styles.filler}>{""}</div>
        </>
      )}
    </div>
  );
}

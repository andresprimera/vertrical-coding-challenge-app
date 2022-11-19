import React from "react";

import ResponseCard from "./ResponseCard";

import { MovieUI } from "context/movies/interfaces";

import styles from "./styles.module.css";

export default function SearchResults({ movies }: { movies: MovieUI[] | [] }) {
  let renderMovies = false;
  renderMovies = movies && movies.length !== 0;

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
        <div className={styles.noInfoContainer}>
          <h3 className={styles.noInfoText}>{"There is no info to show"}</h3>
        </div>
      )}
    </div>
  );
}

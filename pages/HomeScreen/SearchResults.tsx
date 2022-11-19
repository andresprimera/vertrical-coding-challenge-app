import React from "react";

import { ResponseCard } from "./ResponseCard";

import { ResponseUI } from "context/movies/interfaces";

import styles from "./styles.module.css";

export const SearchResults = ({ movies }: { movies: ResponseUI[] | [] }) => {
  return (
    <div className={styles.searchResults}>
      {movies.length === 0 ? (
        <div className={styles.noInfoContainer}>
          <h3 className={styles.noInfoText}>There is no info to show</h3>
        </div>
      ) : (
        movies.map((item, index) => {
          return (
            <ResponseCard
              key={`${item._id}-${index}`}
              index={index}
              {...item}
            />
          );
        })
      )}
    </div>
  );
};

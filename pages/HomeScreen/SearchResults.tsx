import React from "react";
import Link from "next/link";

import ChevronRightIcon from "public/svgs/ChevronRightIcon";

import styles from "./styles.module.css";

import { ResponseUI } from "./types";

export const SearchResults = ({ data }: { data: ResponseUI[] | [] }) => {
  return (
    <div className={styles.searchResults}>
      {data.length === 0 ? (
        <div className={styles.noInfoContainer}>
          <h3 className={styles.noInfoText}>There is no info to show</h3>
        </div>
      ) : (
        data.map((item, index) => {
          const { photo, id, title, shortDescription } = item;
          return (
            <div key={`${id}-${index}`} className={styles.card}>
              {/***FIRST COL 20% WIDTH */}
              <div className={styles.col1}>{photo}</div>
              {/**SECOND COL 80% WIDTH */}
              <div className={styles.col2}>
                <Link className={styles.cardTitle} href={"#"}>
                  {title}
                </Link>
                <p className={styles.cardDescription}>{shortDescription}</p>
              </div>
              <ChevronRightIcon color={"var(--color-primary)"} />
            </div>
          );
        })
      )}
    </div>
  );
};

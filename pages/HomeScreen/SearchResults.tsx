import React from "react";
import Link from "next/link";
import { ResponseCard } from "./ResponseCard";
import styles from "./styles.module.css";

import { ResponseUI } from "types";

export const SearchResults = ({ data }: { data: ResponseUI[] | [] }) => {
  return (
    <div className={styles.searchResults}>
      {data.length === 0 ? (
        <div className={styles.noInfoContainer}>
          <h3 className={styles.noInfoText}>There is no info to show</h3>
        </div>
      ) : (
        data.map((item, index) => {
          return (
            <ResponseCard key={`${item.id}-${index}`} index={index} {...item} />
          );
        })
      )}
    </div>
  );
};

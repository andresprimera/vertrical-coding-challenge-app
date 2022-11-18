import React from "react";
import Link from "next/link";
import ChevronRightIcon from "public/svgs/ChevronRightIcon";

import styles from "./styles.module.css";
interface Props {
  photo: string;
  id: string;
  title: string;
  shortDescription: string;
  index: number;
}

export const ResponseCard = ({
  photo,
  id,
  title,
  shortDescription,
  index,
}: Props) => {
  return (
    <div className={styles.card}>
      {/***FIRST COL 20% WIDTH */}
      <div className={styles.col1}>{photo}</div>
      {/**SECOND COL 80% WIDTH */}
      <div className={styles.col2}>
        <Link className={styles.cardTitle} href={`/Details?selection=${id}`}>
          {title}
        </Link>
        <p className={styles.cardDescription}>{shortDescription}</p>
      </div>
      <ChevronRightIcon color={"var(--color-primary)"} />
    </div>
  );
};

import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import Image from "next/image";

import ChevronRightIcon from "assets/svgs/ChevronRightIcon";

import styles from "./styles.module.css";

interface Props {
  photo: string;
  _id: string;
  title: string;
  shortDescription: string;
  index: number;
}

export default function ResponseCard({
  photo,
  _id,
  title,
  shortDescription,
  index,
}: Props) {
  const loader = useCallback(() => {
    const pictureQuality = 70;
    return `${photo}?w=${80}q=${pictureQuality}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.7 }}
      className={styles.card}
    >
      {/***FIRST COL 20% WIDTH */}
      <div className={styles.col1}>
        <Image
          loader={loader}
          src={`${_id}.jpeg`}
          alt="Picture of the author"
          fill={true}
          style={{ objectFit: "contain" }}
          sizes="10px"
        />
      </div>
      {/**SECOND COL 80% WIDTH */}
      <div className={styles.col2}>
        <div className={styles.cardTitle}>
          <Link href={`/Details/${_id}`}>{title}</Link>
        </div>
        <p className={styles.cardDescription}>{shortDescription}</p>
      </div>
      <ChevronRightIcon color={"var(--color-primary)"} />
    </motion.div>
  );
}

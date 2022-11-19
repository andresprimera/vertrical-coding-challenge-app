import React from "react";
import Image from "next/image";

import { MovieUI } from "context/movies/interfaces";

import styles from "./styles.module.css";

export default function PictureSection({
  selectedMovie,
}: {
  selectedMovie: MovieUI;
}) {
  return (
    <div className={styles.col1}>
      <Image
        loader={() => selectedMovie?.photo}
        src={`${selectedMovie?._id}.jpeg`}
        alt="Picture of the author"
        fill={true}
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 10vw"
      />
    </div>
  );
}

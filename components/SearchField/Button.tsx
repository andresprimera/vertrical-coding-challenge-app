import React from "react";
import SearchIcon from "public/svgs/SearchIcon";

import styles from "./styles.module.css";
interface props {
  onPress: () => void;
}

export const Button = ({ onPress }: props) => {
  return (
    <div className={styles.searchButton} onClick={() => onPress()}>
      <span style={{ marginRight: 16, color: "white" }}>Search</span>
      <SearchIcon height={26} width={26} color={"var(--color-gray)"} />
    </div>
  );
};

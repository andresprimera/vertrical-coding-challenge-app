import React, { useContext } from "react";

import { StoreContext } from "context";

import Lottie from "react-lottie";

import SearchIcon from "assets/svgs/SearchIcon";
import * as animationData from "assets/animations/button-animation.json";

import styles from "./styles.module.css";
import { MoviesStateUI } from "context/movies/interfaces";
interface props {
  onPress: () => void;
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const Button = ({ onPress }: props) => {
  const { state } = useContext(StoreContext);
  const { moviesState } = state;
  const { loading } = moviesState as MoviesStateUI;

  return (
    <div className={styles.searchButton} onClick={() => onPress()}>
      {loading ? (
        <Lottie
          options={defaultOptions}
          height={40}
          width={80}
          isStopped={false}
          isPaused={false}
        />
      ) : (
        <>
          <p className={styles.searchButtonText}>Search</p>
          <SearchIcon height={26} width={26} color={"var(--color-gray)"} />
        </>
      )}
    </div>
  );
};

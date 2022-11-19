import React, { useEffect, useContext } from "react";

import { StoreContext } from "context";
import { handleFirstLoadFinished } from "context/movies/handlers";

import LoadingScreen from "./Loading";
import HomeScreen from "./HomeScreen";
import { DispatchUI, MoviesStateUI, StoreUI } from "context/movies/interfaces";

export default function Home() {
  const { state, moviesDispatch } = useContext<StoreUI>(StoreContext);
  const { moviesState } = state;
  const { firstLoad } = moviesState as MoviesStateUI;

  useEffect(() => {
    if (firstLoad) {
      setTimeout(() => {
        handleFirstLoadFinished(moviesDispatch as React.Dispatch<DispatchUI>);
      }, 1500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstLoad]);

  return firstLoad ? <LoadingScreen /> : <HomeScreen />;
}

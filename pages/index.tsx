import { useEffect, useContext } from "react";

import { StoreContext } from "context";
import { handleFirstLoadFinished } from "context/movies/handlers";

import { LoadingScreen } from "./Loading";
import HomeScreen from "./HomeScreen";

export default function Home() {
  const { state, moviesDispatch } = useContext<any>(StoreContext);
  const { moviesState } = state;
  const { firstLoad } = moviesState;

  useEffect(() => {
    if (firstLoad) {
      setTimeout(() => {
        handleFirstLoadFinished(moviesDispatch);
      }, 1500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstLoad]);

  return firstLoad ? <LoadingScreen /> : <HomeScreen />;
}

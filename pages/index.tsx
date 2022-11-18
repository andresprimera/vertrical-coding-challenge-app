import { useEffect, useContext } from "react";

import { LoadingScreen } from "./Loading";
import { StoreContext } from "context";

import { handleFirstLoadFinished } from "context/data/handlers";

import HomeScreen from "./HomeScreen";

export default function Home() {
  const { state, dataDispatch } = useContext<any>(StoreContext);
  const { dataState } = state;
  const { firstLoad } = dataState;

  useEffect(() => {
    if (firstLoad) {
      setTimeout(() => {
        handleFirstLoadFinished(dataDispatch);
      }, 1500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstLoad]);

  return firstLoad ? <LoadingScreen /> : <HomeScreen />;
}

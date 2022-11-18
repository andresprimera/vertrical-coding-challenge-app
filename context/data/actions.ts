import { DataStateUI } from "./interfaces";

export const setData = (state: DataStateUI, payload: any) => {
  const newState = { ...state };
  newState.data = [...payload];

  return newState;
};

export const updateFirstLoad = (state: DataStateUI, payload: any) => {
  const newState = { ...state };
  newState.firstLoad = payload;
  return newState;
};

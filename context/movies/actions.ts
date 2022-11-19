import { MoviesStateUI } from "./interfaces";

export const setMovies = (state: MoviesStateUI, payload: any) => {
  const newState = { ...state };
  newState.movies = [...payload];

  return newState;
};

export const updateFirstLoad = (state: MoviesStateUI, payload: any) => {
  const newState = { ...state };
  newState.firstLoad = payload;
  return newState;
};

export const setLoading = (state: MoviesStateUI, payload: any) => {
  const newState = { ...state };
  newState.loading = payload;

  return newState;
};

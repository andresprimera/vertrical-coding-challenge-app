import { setMovies, updateFirstLoad, setLoading } from "./actions";
import { UPDATE_FIRST_LOAD, SET_MOVIES, SET_LOADING } from "./types";

export const MOVIES_INITIAL_STATE = {
  movies: [],
  loading: false,
  firstLoad: true,
};

const moviesReducer = (state: any, action: { type: string; payload: any }) => {
  switch (action.type) {
    case SET_MOVIES:
      return setMovies(state, action.payload);

    case UPDATE_FIRST_LOAD:
      return updateFirstLoad(state, action.payload);

    case SET_LOADING:
      return setLoading(state, action.payload);
  }
  return state;
};

export default moviesReducer;

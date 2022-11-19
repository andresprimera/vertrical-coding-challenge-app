import { createContext, useReducer } from "react";

import moviesReducer, { MOVIES_INITIAL_STATE } from "./movies/reducer";

const StoreContext = createContext<{
  state: { moviesState: any };
  moviesDispatch: any;
}>({
  state: { moviesState: null },
  moviesDispatch: null,
});

const StoreProvider = ({ children }: any) => {
  const [moviesState, moviesDispatch] = useReducer(
    moviesReducer,
    MOVIES_INITIAL_STATE
  );

  return (
    <StoreContext.Provider
      value={{
        state: {
          moviesState,
        },

        moviesDispatch,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };

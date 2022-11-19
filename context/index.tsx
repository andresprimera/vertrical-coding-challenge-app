import React, { createContext, PropsWithChildren, useReducer } from "react";
import { StoreUI } from "./movies/interfaces";

import moviesReducer, { MOVIES_INITIAL_STATE } from "./movies/reducer";

const StoreContext = createContext<StoreUI>({
  state: { moviesState: null },
  moviesDispatch: null,
});

const StoreProvider = ({ children }: PropsWithChildren) => {
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

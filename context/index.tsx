import { createContext, useReducer, useEffect } from "react";

import dataReducer, { DATA_INITIAL_STATE } from "./data/reducer";

const StoreContext = createContext<{
  state: { dataState: any };
  dataDispatch: any;
}>({
  state: { dataState: null },
  dataDispatch: null,
});

const StoreProvider = ({ children }: any) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, DATA_INITIAL_STATE);

  return (
    <StoreContext.Provider
      value={{
        state: {
          dataState,
        },

        dataDispatch,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };

import React from "react";

import { SET_MOVIES, UPDATE_FIRST_LOAD, SET_LOADING } from "./types";

import { SERVER_URL } from "keys/environment";
import { MOVIES_ROUTE } from "keys/apiRoutes";

interface handleSearchUI {
  dispatch: React.Dispatch<{ type: string; payload: any }>;
  query: string;
}

export const handlePerformSearch = async ({
  dispatch,
  query,
}: handleSearchUI) => {
  dispatch({ type: SET_LOADING, payload: true });

  console.log({ MOVIES_ROUTE });

  const jsonResponse = await fetch(`${SERVER_URL}/${MOVIES_ROUTE}/${query}`);

  const data = await jsonResponse.json();
  const movies = data.response;

  dispatch({ type: SET_LOADING, payload: false });

  dispatch({ type: SET_MOVIES, payload: movies });
};

export const handleFirstLoadFinished = async (
  dispatch: React.Dispatch<{ type: string; payload: any }>
) => {
  dispatch({ type: UPDATE_FIRST_LOAD, payload: false });
};

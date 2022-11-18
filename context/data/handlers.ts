import React from "react";

import { SET_DATA, UPDATE_FIRST_LOAD } from "./types";

const dummyData = [
  {
    id: "0",
    title: "title 1",
    photo: "photo",
    description: "description",
    shortDescription: "Short Description",
  },
  {
    id: "1",
    title: "title 2",
    photo: "photo",
    description: "description",
    shortDescription: "Short Description",
  },
  {
    id: "2",
    title: "title 3",
    photo: "photo",
    description: "description",
    shortDescription: "Short Description",
  },
  {
    id: "3",
    title: "titlev4",
    photo: "photo",
    description: "description",
    shortDescription: "Short Description",
  },
  {
    id: "4",
    title: "title 5",
    photo: "photo",
    description: "description",
    shortDescription: "Short Description",
  },
  {
    id: "5",
    title: "title 6",
    photo: "photo",
    description: "description",
    shortDescription: "Short Description",
  },
  {
    id: "6",
    title: "title 7",
    photo: "photo",
    description: "description",
    shortDescription: "Short Description",
  },
  {
    id: "7",
    title: "title 8",
    photo: "photo",
    description: "description",
    shortDescription: "Short Description",
  },
  {
    id: "8",
    title: "title 9",
    photo: "photo",
    description: "description",
    shortDescription: "Short Description",
  },
  {
    id: "9",
    title: "title 10",
    photo: "photo",
    description: "description",
    shortDescription: "Short Description",
  },
  {
    id: "10",
    title: "title 11",
    photo: "photo",
    description: "description",
    shortDescription: "Short Description",
  },
  {
    id: "11",
    title: "title 12",
    photo: "photo",
    description: "description",
    shortDescription: "Short Description",
  },
];

export const handlePerformSearch = (
  dispatch: React.Dispatch<{ type: string; payload: any }>
) => {
  /// perform serch here

  dispatch({ type: SET_DATA, payload: dummyData });
};

export const handleFirstLoadFinished = (
  dispatch: React.Dispatch<{ type: string; payload: any }>
) => {
  dispatch({ type: UPDATE_FIRST_LOAD, payload: false });
};

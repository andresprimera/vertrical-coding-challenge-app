import { setData, updateFirstLoad } from "./actions";
import { UPDATE_FIRST_LOAD, SET_DATA } from "./types";

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
    title: "title",
    photo: "photo",
    description: "description",
    shortDescription: "Short Description",
  },
  {
    id: "3",
    title: "title",
    photo: "photo",
    description: "description",
    shortDescription: "Short Description",
  },
  {
    id: "4",
    title: "title",
    photo: "photo",
    description: "description",
    shortDescription: "Short Description",
  },
  {
    id: "5",
    title: "title",
    photo: "photo",
    description: "description",
    shortDescription: "Short Description",
  },
  {
    id: "6",
    title: "title",
    photo: "photo",
    description: "description",
    shortDescription: "Short Description",
  },
  {
    id: "7",
    title: "title",
    photo: "photo",
    description: "description",
    shortDescription: "Short Description",
  },
  {
    id: "8",
    title: "title",
    photo: "photo",
    description: "description",
    shortDescription: "Short Description",
  },
  {
    id: "9",
    title: "title",
    photo: "photo",
    description: "description",
    shortDescription: "Short Description",
  },
  {
    id: "10",
    title: "title",
    photo: "photo",
    description: "description",
    shortDescription: "Short Description",
  },
  {
    id: "11",
    title: "title",
    photo: "photo",
    description: "description",
    shortDescription: "Short Description",
  },
];

export const DATA_INITIAL_STATE = { data: [], loading: false, firstLoad: true };

const dataReducer = (state: any, action: { type: string; payload: any }) => {
  switch (action.type) {
    case SET_DATA:
      return setData(state, action.payload);

    case UPDATE_FIRST_LOAD:
      return updateFirstLoad(state, action.payload);
  }
  return state;
};

export default dataReducer;

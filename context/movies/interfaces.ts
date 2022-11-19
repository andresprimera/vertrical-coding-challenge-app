export interface ResponseUI {
  _id: string;
  title: string;
  photo: string;
  description: string;
  shortDescription: string;
}

export interface MoviesStateUI {
  movies: ResponseUI[];
  loading: boolean;
  firstLoad: boolean;
}

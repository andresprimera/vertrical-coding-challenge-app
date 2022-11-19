export interface MovieUI {
  _id: string;
  title: string;
  photo: string;
  description: string;
  shortDescription: string;
}

export interface MoviesStateUI {
  movies: MovieUI[];
  loading: boolean;
  firstLoad: boolean;
}

export interface StoreUI {
  state: { moviesState: MoviesStateUI | null };
  moviesDispatch: React.Dispatch<DispatchUI> | null;
}

export interface DispatchUI {
  type: string;
  payload: any;
}

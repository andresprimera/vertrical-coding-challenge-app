export interface ResponseUI {
  id: string;
  title: string;
  photo: string;
  description: string;
  shortDescription: string;
}

export interface DataStateUI {
  data: ResponseUI[];
  loading: boolean;
  firstLoad: boolean;
}

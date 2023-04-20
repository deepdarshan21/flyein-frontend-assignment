export interface Author {
  key: string;
  name: string;
}

export interface Book {
  key: string;
  title: string;
  authors?: Author[] | string;
  author_name?: string[] | string;
  first_publish_year?:  number;
}

export interface SearchResponse {
  num_found: number;
  docs: Book[];
  start: number;
  offset: number;
}

export interface IMovie {
  id: string;
  backdrop: string;
  cast: string[];
  classification: string;
  director: string[];
  genres: string[];
  imdb_rating: number;
  length: string;
  overview: string;
  poster: string;
  released_on: Date;
  slug: string;
  title: string;
}
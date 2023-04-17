import { MovieType } from '@/interfaces/MovieType.module';
import { useQuery } from '@tanstack/react-query';

const getMovies = async (): Promise<MovieType[]> => {
  const URL = '/api/movies';
  const response = await fetch(URL);

  return response.json().then((res) => res.results);
};

const useMovie = (): MovieType[] => {
  const { data } = useQuery(['movies'], getMovies);
  return data as MovieType[];
};

export default useMovie;

import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieList from '@/components/MovieList';
import { MovieType } from '@/interfaces/MovieType.module';
import useMovie from '@/components/hooks/useMovie';

export default function Home() {
  // const [movies, setMovies] = useState<MovieType[]>([]);

  // useEffect(() => {
  //   const URL = '/api/movies';
  //   axios.get(URL).then((res) => {
  //     setMovies(res.data.results);
  //   });
  // }, []);
  const res = useMovie();

  return (
    <Layout>
      <MovieList movies={res} />
    </Layout>
  );
}

const Layout = styled.div`
  background-color: wheat;
`;

import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import MovieList from '@/components/MovieList';
import { MovieType } from '@/interfaces/MovieType.module';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Home() {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    const URL = '/api/movies';
    axios.get(URL).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  return (
    <Layout>
      <MovieList movies={movies} />
    </Layout>
  );
}

const Layout = styled.div`
  background-color: wheat;
`;

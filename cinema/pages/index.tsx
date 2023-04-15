import Todos from '@/components/Todos';
import axios from 'axios';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface MovieData {
  page: number;
  results: { id: number; backdrop_path: string | null; original_title: string }[];
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Home() {
  const [movies, setMovies] = useState<MovieData>();

  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    axios.get(URL).then((res) => {
      setMovies(res.data);
    });
  }, []);

  console.log(movies?.results);
  return (
    <StyledDiv>
      <Image
        src={
          'https://images.velog.io/images/kim98111/post/59b25b73-7c6c-4820-83f5-c3107dfd97a2/nextjs.png'
        }
        alt='Picture of the author'
        width={500}
        height={500}
      />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  background-color: red;
`;

import React from 'react';
import Movie from './Movie';
import { MovieType } from '@/interfaces/MovieType.module';
import Link from 'next/link';

const MovieList = ({ movies }: { movies: MovieType[] }) => {
  return (
    <ul>
      {movies?.map((movie) => (
        <li key={movie.id}>
          <Link
            key={movie.id}
            href={{
              pathname: `/api/movies/${movie.id}`,
              query: { id: movie.id, original_title: movie.original_title },
            }}
            as={`/movies/${movie.id}`}>
            <Movie key={movie.id} {...movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(MovieList);

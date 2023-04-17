import { MovieType } from '@/interfaces/MovieType.module';
import Image from 'next/image';
import React from 'react';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';
const Movie = ({ id, backdrop_path, original_title }: MovieType) => {
  return (
    <div>
      {backdrop_path && (
        <Image
          src={`t/p/w500${backdrop_path}`}
          alt='movie_img'
          width={100}
          height={100}
          loader={({ src }: { src: string }) => `${BASE_URL}/${src}`}
          priority
        />
      )}
      <span>{original_title}</span>
    </div>
  );
};

export default React.memo(Movie);

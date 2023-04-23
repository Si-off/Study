import React from 'react';
import { useRouter } from 'next/router';

const MovieDetail = () => {
  const router = useRouter();
  const { id, original_title } = router.query;

  if (router.isReady) {
    console.log(router, id, original_title);
  }

  return <div>h</div>;
};

export default MovieDetail;

import React from 'react';
import { useRouter } from 'next/router';

const MovieDetail = () => {
  const router = useRouter();
  const { id, title } = router.query;
  return <div>h</div>;
};

export default MovieDetail;

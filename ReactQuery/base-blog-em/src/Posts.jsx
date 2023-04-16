import { useEffect, useState } from 'react';
import React from 'react';
import { PostDetail } from './PostDetail';
import { useQuery, useQueryClient } from 'react-query';
const maxPostPage = 10;

async function fetchPosts(pageNum) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`
  );
  return response.json();
}

export function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const queryClinent = useQueryClient();

  useEffect(() => {
    if (currentPage < maxPostPage) {
      const nextPage = currentPage + 1;
      queryClinent.prefetchQuery(['posts', nextPage], () => fetchPosts(nextPage));
    }
  }, [currentPage, queryClinent]);

  // replace with useQuery
  const { data, isError, isLoading, error } = useQuery(
    ['posts', currentPage],
    () => fetchPosts(currentPage),
    {
      staleTime: 2000,
      keepPreviousData: true,
    }
  );

  if (isLoading) return <h4>Loading...</h4>;
  if (isError)
    return (
      <>
        <h3>something went wrong</h3>
        <p>{error.toSring()}</p>
      </>
    );

  return (
    <React.Fragment>
      <ul>
        {data.map((post) => (
          <li key={post.id} className='post-title' onClick={() => setSelectedPost(post)}>
            {post.title}
          </li>
        ))}
      </ul>
      <div className='pages'>
        <button
          disabled={currentPage <= 1}
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
          }}>
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button
          disabled={maxPostPage <= currentPage}
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
          }}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </React.Fragment>
  );
}

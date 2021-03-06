import React from 'react';
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </>
  );
};

export default Post;

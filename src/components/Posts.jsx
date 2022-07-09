import React from 'react';

const Posts = ({ post }) => {
  return (
    <div>
      <p>{post.body}</p>
      <p>{post.id}</p>
      <p>{post.title}</p>
    </div>
  );
};

export default Posts;

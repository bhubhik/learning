import React from 'react';

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.slice(0, 10).map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
};

export default Posts;

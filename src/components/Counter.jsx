import React from 'react';

const Counter = ({ count, inc, dec }) => {
  return (
    <div>
      <p>{count}</p>
      <h4 onClick={inc}>+</h4>
      <h4 onClick={dec}>-</h4>
    </div>
  );
};

export default Counter;

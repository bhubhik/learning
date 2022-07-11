import React from 'react';

const Counter = ({ count, inc, dec }) => {
  return (
    <div>
      <p data-testid='counter'>{count}</p>
      <h4 data-testid='decrement' onClick={dec}>
        -
      </h4>
      <h4 data-testid='increment' onClick={inc}>
        +
      </h4>
    </div>
  );
};

export default Counter;

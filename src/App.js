import { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Posts from './components/Posts';

function App() {
  const [count, setCount] = useState(1);
  const [post, setPost] = useState({});
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };
  useEffect(() => {
    const fetchPost = async () => {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${count}`
      )
        .then((res) => res.json())
        .then((data) => {
          setPost({ ...data });
        });
    };

    fetchPost();
  }, [count]);

  return (
    <div className='App'>
      <Posts post={post} />
      <Counter count={count} inc={inc} dec={dec} />
    </div>
  );
}

export default App;

import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Posts from './components/Posts';

function App() {
  const [count, setCount] = useState(1);
  const [posts, setPost] = useState([]);

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
      const data = await axios
        .get(`https://jsonplaceholder.typicode.com/posts/`)
        .then((res) => {
          setPost([...res.data]);
        });
    };
    fetchPost();
  }, []);
  console.log(posts);
  return (
    <div className='App'>
      <Posts posts={posts} />
      <Counter count={count} inc={inc} dec={dec} />
    </div>
  );
}

export default App;

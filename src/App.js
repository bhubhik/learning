import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Posts from './components/Posts';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Blog from './routes/Blog';

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
    <>
      <nav>
        <Link exact to='/'>
          App
        </Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
      </nav>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;

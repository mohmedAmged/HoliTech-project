import './App.css';
import { Routes } from 'react-router-dom';
import MyNav from './components/myNav/MyNav';
import { useState } from 'react';

function App() {
  const [scrollToggle, setScrollToggle] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setScrollToggle(true);
    } else {
      setScrollToggle(false);
    }
  });
  return (
    <>
    <MyNav scrollToggle={scrollToggle}/>
    <Routes>

    </Routes>
    </>
  );
}

export default App;

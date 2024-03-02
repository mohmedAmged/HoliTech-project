import './App.css';
import { Route, Routes } from 'react-router-dom';
import MyNav from './components/myNav/MyNav';
import { useState } from 'react';
import MyMainHome from './pages/myMainHome/MyMainHome';
import MyAllServices from './pages/myAllServices/MyAllServices';

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
      <Route path='/' element={<MyMainHome />} />
      <Route path='/services' element={<MyAllServices />} />
    </Routes>
    </>
  );
}

export default App;

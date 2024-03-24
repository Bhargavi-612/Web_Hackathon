import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Search from './pages/Search';
import Footer from './components/Footer';
import HomeLogin from './components/HomeLogin';
import HomeRegister from './components/HomeRegister';
import Choice from './components/Choice';
import UserHome from './components/UserHome';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/products' element={<Products />} /> */}
          <Route path='/' element={<Choice />} />
          <Route path='/login' element={<HomeLogin />} />
          <Route path='/register' element={<HomeRegister />} />
          <Route path='/home' element={<UserHome />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
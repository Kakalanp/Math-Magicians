import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="Math-Magicians/Calculator" element={<Calculator />} />
      <Route path="Math-Magicians/" element={<Home />} />
      <Route path="Math-Magicians/Quote" element={<Quote />} />
    </Routes>
  );
}

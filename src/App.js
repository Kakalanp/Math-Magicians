import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="Calculator" element={<Calculator />} />
      <Route path="" element={<Home />} />
      <Route path="Quote" element={<Quote />} />
    </Routes>
  );
}

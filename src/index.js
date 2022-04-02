import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

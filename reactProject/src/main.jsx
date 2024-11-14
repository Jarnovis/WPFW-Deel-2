// index.js
import React, { StrictMode } from 'react'; 
import { createRoot } from 'react-dom/client';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import './index.css';  
import WordleGame from './lingo'; 
import Dice from './dobbel'; 
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/lingo" element={<WordleGame />} /> 
        <Route path="/dobbel" element={<Dice />} /> 
      </Routes>
    </Router>
  </StrictMode>
);

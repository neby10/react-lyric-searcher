// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LyricsPage from './components/LyricsPage';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/lyrics' element={ <LyricsPage /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

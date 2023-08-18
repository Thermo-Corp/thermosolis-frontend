import React from 'react';

// React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';

// Styles
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/thermosolis-frontend" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

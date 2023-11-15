import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// components
import LandingPage from './pages/landingPage/LandingPage';
import LaunchDetail from './pages/launchDetail/LaunchDetail';

//import './App.css';

function App() {

  return (
   <Router>
    <Routes>

      <Route 
        path='/'
        element={<LandingPage />}
      />

      <Route 
        path='/launchDetail'
        element={<LaunchDetail />}
      />

      <Route 
        path='*'
        element={<p>Page not found :(</p>}
      />

    </Routes>
   </Router>
  );
}

export default App;

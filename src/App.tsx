import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// components
import LandingPage from './pages/landingPage/LandingPage';
import LaunchDetail from './pages/launchDetail/LaunchDetail';
import Navbar from './components/navbar/Navbar';

import './App.css';

function App() {

  return (
   <Router>
    <Routes>
      <Route path='/' element={<Navbar />} > 
        <Route path='/spacex-project' element={<LandingPage />}/>
        <Route path='/launchDetail' element={<LaunchDetail />}/>
        <Route path='*' element={<h1 className='text-white'>Page not found :(</h1>} />
      </Route>
    </Routes>
   </Router>
  );
}

export default App;

import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventsPage from './pages/EventsPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/timeline/:id' element={<EventsPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default App;

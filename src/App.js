import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TimelinePage from './pages/TimelinePage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} exact />
        <Route path='timeline/:id' element={<TimelinePage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;

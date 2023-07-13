import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Members from './components/Members';
import Contributions from './components/Contributions';
import NotFound from './components/NotFound';

const Path = () => {
  return (
    <Routes>
        <Route  path='/' element={Login} />
        <Route  path='dashboard' element={Dashboard} />
        <Route  path='members' element={Members} />
        <Route  path='contributions' element={Contributions} />
        <Route  path='*' element={NotFound} />
    </Routes>
  );
};

export default Path;

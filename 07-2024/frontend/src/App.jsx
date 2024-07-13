import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import UserDashboard from './components/user/userDashboard'; // Adjusted path based on folder structure
import RagPickerDashboard from './components/rag-picker/ragPickerDashboard'; // Adjusted path based on folder structure
import UserProfile from './components/user/userProfile';
import RagPickerProfile from './components/rag-picker/ragPickerProfile';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          
          {/* User-side nested routing */}
          <Route path='/user/*' element={<UserDashboard />}>
            <Route index path='dashboard' element={<UserDashboard/>} /> 
            <Route path='profile' element={<UserProfile />}/>
          </Route>

          {/* Rag-picker-side nested routing */}
          <Route path='/rag-picker/*' element={<RagPickerDashboard />}>
            <Route index path='dashboard' element={<RagPickerDashboard />} />
            <Route path='profile' element={<RagPickerProfile />}/> 
          </Route>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;

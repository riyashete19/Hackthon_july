import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { UserProvider } from './components/context/useContext';
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import UserContextProvider from './context/userContext.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Homepage from './pages/Homepage.jsx';
import Overviewpage from './pages/Overviewpage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/weekly-overview" element={<Overviewpage />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  </StrictMode>
);

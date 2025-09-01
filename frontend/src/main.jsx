import React from 'react';
import { createRoot } from 'react-dom/client';
import PaginaPrincipal from './pages/Principal';
import { BrowserRouter } from 'react-router-dom'
import UserRoutes from './routes/userRoutes';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)

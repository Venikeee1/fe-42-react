import React from 'react';
import ReactDOM from 'react-dom/client';
import { NotifyProvider } from './providers/ProviderNotify';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <NotifyProvider>
      <App />
    </NotifyProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

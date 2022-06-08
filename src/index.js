import React from 'react';
import ReactDOM from 'react-dom/client';
import { NotifyProvider } from './providers/ProviderNotify';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { store, persistor } from './store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <NotifyProvider>
            <App />
          </NotifyProvider>
        </BrowserRouter>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);

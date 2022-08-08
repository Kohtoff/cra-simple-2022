import React from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import { CircularProgress, CssBaseline } from '@mui/material';
import { App } from './App';
import store, {persistor} from './services/store';
import { PersistGate } from 'redux-persist/integration/react';

export function AppWrapper() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={<CircularProgress />} persistor={persistor}>
          <CssBaseline />
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

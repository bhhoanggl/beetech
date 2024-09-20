import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import App from './App';
import './style/index.sass';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <NextUIProvider>
            <App />
          </NextUIProvider>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

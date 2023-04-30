import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './custom.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './context/ThemeContext';
import "@fontsource/roboto";
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter>
              <App />
            </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
);

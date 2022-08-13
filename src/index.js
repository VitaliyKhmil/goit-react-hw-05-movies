import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { Globalstyles } from './styles/Global';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies/">
      <Global styles={Globalstyles} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
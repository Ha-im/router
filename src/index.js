import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

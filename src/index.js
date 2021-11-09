import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './Style/App.css';
import './Style/bootstrap.min.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


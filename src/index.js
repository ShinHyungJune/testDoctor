import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {setUp} from "./utils/interceptors";

window.domain = "https://hellodc.xyz";

setUp();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

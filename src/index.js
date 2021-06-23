import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import rootData from './data'

ReactDOM.render(
  <React.StrictMode>
    <App data={rootData}/>
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { login as Login, password as Password } from './custom/login';
import './index.css';

const template = (
  <div class='container'>
    <App></App>
    <h1>
      {Login('raghava') + '' + Password('raghava')}
    </h1>!
  </div>
);


ReactDOM.render(
  template,
  document.getElementById('root')
);
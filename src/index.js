import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'jquery';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import DocumentMeta from 'react-document-meta';

const meta = {
  title: 'Platesome',
  description: 'Platesome is a nutrition tracking website designed to keep track of your daily servings of fruits, vegetables, and dairy!  Track your progress and become healthier by eating your ideal daily servings.',
  canonical: 'https://platesome.com/',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags'
    }
  }
};

ReactDOM.render(
  <div><DocumentMeta {...meta}/><App /></div>,
  document.getElementById('root')
);

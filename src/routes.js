import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import SearchPage from './components/SearchPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
     <Route path="about" component={AboutPage} />
     <Route path="search" component={SearchPage} />
  </Route>
);

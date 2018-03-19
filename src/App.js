import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HeroCardList from '../src/components/HeroCardList';
import Detail from '../src/components/Detail';

import './App.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={HeroCardList} />
      <Route path="/:id" component={Detail} />
    </div>
  </Router>
);

export default App;

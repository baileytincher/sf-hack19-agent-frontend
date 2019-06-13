import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import Claim from './Claim/Claim';

function App() {
  return (
    <Router basename="/sf-hack19-agent-frontend">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/claim" component={Claim} />
      </Switch>
    </Router>

  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import NotFound from './components/NotFound';


function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import HorizontalLinearStepper from './components/HorizontalLinearStepper';


function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HorizontalLinearStepper} />
          <Route path="/home" component={HorizontalLinearStepper} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;

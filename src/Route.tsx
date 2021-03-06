import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Aboutus from './containers/Aboutus';
import Quiz from './containers/Quiz';
import Contact from './containers/Contact';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/aboutus">
        <Aboutus/>
      </Route>
      <Route path="/quiz">
        <Quiz/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
  </Router>
)

Routes.propTypes = {
  match: PropTypes.object,
  userData: PropTypes.object
}

export default Routes


import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Restaurant from './components/Restaurant';
import Order from './components/Order';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/restaurant/:id" component={Restaurant} />
        <Route path="/order/:id" component={Order} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;




export default RestaurantList;





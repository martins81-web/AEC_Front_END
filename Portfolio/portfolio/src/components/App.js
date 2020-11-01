import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Main from './Main';
import Portfolio from './Portfolio';

function App() {
  return (
    <Switch>
          <Redirect exact from="/" to="/Main/" />
          <Route path="/" exact component={Main} /> 
          <Route path="/Main/" component={Main} /> 
          <Route path="/Main/:language" component={Main} /> 
          <Route path="/Portfolio/:language" component={Portfolio} /> 
    </Switch>
  );
}

export default App;

import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './services/history';

const Home = React.lazy(() => import('./containers/Home'));
const List = React.lazy(() => import('./containers/List'));

const Routers = () => {
  return <Router history={history.history}>
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/list' exact component={List} />
      </Switch>
    </Suspense>
  </Router>
}

export default Routers;

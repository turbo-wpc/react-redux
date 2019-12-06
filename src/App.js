import React, { Suspense } from 'react';
import { BrowserRouter, HashRouter, Router, Switch, Route } from 'react-router-dom';
import history from './services/history';

const Home = React.lazy(() => import('./containers/Home'));

const App = () => {
  return <HashRouter basename="/wowfe/subject">
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Suspense>
  </HashRouter>
}

export default App;

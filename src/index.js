import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux';
import Routers from './Routers';

import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(<Provider store={store}>
    <Routers />
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();

import { createBrowserHistory } from 'history';
import queryString from 'query-string';

class History {
  constructor() {
    this.history = createBrowserHistory({
      forceRefresh: true,
      basename: '/wowfe/subject',
      getUserConfirmation: (message, callback) => callback(window.confirm(message))
    })
    // this.history.listen((location, action) => {
    //   console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`);
    //   console.log(`The last navigation action was ${action}`);
    // });
  }

  push(pathname, params={}) {
    this.history.push({
      pathname,
      search: `?${queryString.stringify(params, {
        sort: false
      })}`
    })
  }

  replace(pathname, params={}) {
    this.history.replace({
      pathname,
      search: `?${queryString.stringify(params, {
        sort: false
      })}`
    })
  }
}

export default new History()

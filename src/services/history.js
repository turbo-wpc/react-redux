import { createBrowserHistory } from 'history'

class History {
  constructor() {
    this.history = createBrowserHistory({
      forceRefresh: false,
      basename: '/wowfe/zulin',
      getUserConfirmation: (message, callback) => callback(window.confirm(message))
    })
    this.history.listen((location, action) => console.log(action, location.pathname, location.state))
  }
}

export default new History()

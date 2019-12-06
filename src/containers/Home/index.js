import React, { Component } from 'react';
import history from '../../services/history';

class Home extends Component {
  render() {
    return (
      <div>
        <p>hello world</p>
        <button onClick={() => {
          history.history.push('/list')
        }}>跳转</button>
      </div>
    );
  }
}

export default Home;

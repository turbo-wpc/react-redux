import React from 'react';
import { connect } from 'react-redux';
import history from '../../services/history';
import { login } from '../../redux/modules/auth';
import { getAuthName } from '../../selectors';

const Home = ({ name, loginHandler }) => {
  return <div>
    <p>{`hello ${ name || 'world'}`}</p>
    <button onClick={() => {
      history.replace('/list', {
        itemId: 444,
        pvid: 666
      })
    }}>list</button>
    <button onClick={() => {
      loginHandler({ name: 'wang' })
    }}>登录</button>
  </div>
}

function mapStateToProps(state) {
  return {
    name: getAuthName(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginHandler: userInfo => dispatch(login(userInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

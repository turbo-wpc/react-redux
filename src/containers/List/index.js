import React from 'react';
import { connect } from 'react-redux';
import history from '../../services/history';
import { logout } from '../../redux/modules/auth';
import { getAuthName } from '../../selectors';

const List = ({ name, logout }) => {
  return <div>
    <p>{name || '未登录'}</p>
    <button onClick={() => {
      history.replace('/')
    }}>home</button>
    <button onClick={() => {
      logout()
    }}>退出</button>
  </div>
}

function mapStateToProps(state) {
  return {
    name: getAuthName(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

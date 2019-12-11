// actions
const LOGIN = 'REACT-REDUX/auth/LOGIN';
const LOGOUT = 'REACT-REDUX/auth/LOGOUT';

const initState = {
  login: false
};

// reducer
export default function reducer(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: true,
        userInfo: action.userInfo
      };
    case LOGOUT:
      return {
        ...state,
        login: false,
        userInfo: undefined
      }
    default:
      return state;
  }
}

// Action Creators
export function login(userInfo) {
  return {
    type: LOGIN,
    userInfo
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}

import { createSelector } from 'reselect';

export const getAuthName = createSelector(
  [
    state => state.auth.login ? state.auth.userInfo.name : ''
  ],
  name => name
);

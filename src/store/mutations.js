import axios from 'axios';

export default {
  updateUser(state, { userId, permissions }) {
    state.user.userId = userId;
    state.user.permissions = permissions;
  },
  updateToken(state, token) {
    state.user.token = token;
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    localStorage.setItem('token', token);
  }
};

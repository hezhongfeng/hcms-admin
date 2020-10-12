import axios from 'axios';

export default {
  updateUser(state, user) {
    state.user = user;
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.token;
  }
};

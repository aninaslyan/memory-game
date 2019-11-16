import UserMethods from '../models/userModel';

export default {
  async userScore(id) {
    let player = new UserMethods();
    return await player.getUserScore(id);
  },

  userScores() {

  },

  async usersByScores() {
    let player = new UserMethods();
    return await player.getUsersByScores();
  },

  async register({ name, email, password }) {
    let player = new UserMethods();
    return await player.userRegister(name, email, password);
  },

  login() {
  }
};

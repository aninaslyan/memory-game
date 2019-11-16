import UserMethods from '../models/userModel';

export default {
  async userScore(id) {
    let player = new UserMethods();
    return await player.getUserScore(id);
  },

  async userUpdateScore(id, score) {
    let player = new UserMethods();
    return await player.getUserWithUpdatedScore(id, score);
  },

  async usersByScores() {
    let player = new UserMethods();
    return await player.getUsersByScores();
  },

  async register({ name, email, password }) {
    let player = new UserMethods();
    return await player.userRegister(name, email, password);
  },

  async login({ email, password }) {
    let player = new UserMethods();
    return await player.loginUser(email, password);
  }
};

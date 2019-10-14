import User from '../models/userModel';

export default {
  async userScore(id) {
    let player = new User(id);
    return await player.getUserScore();
  },

  userScores() {
  },

  register() {
  },

  login() {
  }
};

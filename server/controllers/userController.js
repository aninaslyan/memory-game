import UserMethods from '../models/userModel';

export default {
  async userScore(id) {
    let player = new UserMethods();
    return await player.getUserScore(id);
  },

  userScores() {
  },

  async register({ name, email, password, password2 }) {
    // validation staff todo move validation to router
    let errors = [];

    const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email || !password || !password2) {
      errors.push({message: 'Please fill all required fields'});
    }

    // email
    if (!emailValidator.test(email)) {
      errors.push({message: 'Email address is incorrect'});
    }

    // password
    if (password.length < 6) {
      errors.push({message: 'Password should have at least 6 characters'});
    }

    if (password !== password2) {
      errors.push({message: "Passwords Don't match"});
    }

    if (errors.length <= 0) {
      let player = new UserMethods();
      return await player.userRegister(name, email, password);
    } else {
      return errors;
    }
  },

  login() {
  }
};

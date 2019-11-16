import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  score: Number
});

class UserMethods {
  constructor() {
    this.model = mongoose.model('User', userSchema);
  }

  async getUserScore(id) {
    try {
      let data = await this.model.findOne({ _id: id });
      return data.score;
    } catch (err) {
      console.log(err);
    }
  }

  async getUserWithUpdatedScore(id, score) {
    try {
      let user = await this.model.findOneAndUpdate({ _id: id }, { $set: { score: score }}, {
        new: true,
        useFindAndModify: false
      });
      return user;
    } catch (e) {
      console.log(e);
    }
  }

  async getUsersByScores() {
    try {
      return await this.model.find().sort({ 'score': 'desc' });
    } catch (e) {
      console.log(e);
    }
  }

  async userRegister(name, email, password) {
    try {
      let user = await this.model.findOne({ email });

      if (user) {
        return 'user already exists';
      }

      const newUser = new this.model({
        name,
        email,
        password,
        score: 0
      });

      try {
        let salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt);

        return await newUser.save();
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async loginUser(email, password) {
    try {
      let user = await this.model.findOne({email: email});

      if (!user) {
        return 'there is no user registered with this email';
      }

      try {
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
          return 'wrong username or password'
        } else {
          return user;
        }
      } catch (e) {
        console.log(e);
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export default UserMethods;

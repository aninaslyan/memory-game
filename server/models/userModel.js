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

  async userRegister(name, email, password) {
    try {
      let user = await this.model.findOne({ email });

      if (user) {
        return 'user exists';
      } else {
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
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export default UserMethods;

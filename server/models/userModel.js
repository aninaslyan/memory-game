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

  getUserScore(id) {
    return this.model.findOne({_id: id}, (err, data) => {
      console.log(data.score);
    });
  }

  async userRegister(name, email, password) {
    let user = await this.model.findOne({email});

    if (user) {
      // user exists
      console.log('user exists');
    } else {
      const newUser = new this.model({
        name,
        email,
        password,
        score: 0
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(res => console.log(res))
            .catch(err => console.log(err));
        });
      });
    }
  }
}

export default UserMethods;

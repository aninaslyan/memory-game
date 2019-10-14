import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    required: true
  },
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

class User {
  constructor(id) {
    this.model = mongoose.model('User', userSchema);
    this.id = id;
  }

  getUserScore() {
    return this.model.find({ _id: this.id }, (err, data) => {
      console.log(data, err);
    });
  }
}

export default User;

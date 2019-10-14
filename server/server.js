import Koa from 'koa';
import userRout from './routers/userRouter';
import mongoose from "mongoose";
import db from './config/config';

const app = new Koa();
const PORT = process.env.PORT || 3000;

//db configuration
mongoose.connect(db.mongoURL, {useUnifiedTopology: true, useNewUrlParser: true})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// routes
app.use(userRout.routes());

const server = app.listen(PORT, () => {
  console.log(`server runs at ${PORT}`);
});

// for testing purposes
export default server;

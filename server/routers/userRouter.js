import Router from 'koa-router';
import userCtr from '../controllers/userController';
import validator from 'validator';

const router = new Router({ prefix: '/users' });

router.get('/:id/score', async (ctx, next) => {
  let score = await userCtr.userScore(ctx.params.id);
  ctx.response.body = score;
});

router.get('/scores', (ctx, next) => {
});

router.post('/register', async (ctx, next) => {
  const errors = validation(ctx.query);

  if (errors.length === 0) {
    const user = await userCtr.register(ctx.query);
    ctx.response.body = user;
  } else {
    ctx.response.body = errors;
    return errors;
  }
});

router.post('/login', (ctx, next) => {
});

function validation({ name, email, password, password2 }) {
  let errors = [];

  if (validator.isEmpty(email) || validator.isEmpty(password) || validator.isEmpty(password2)) { //also checks whitespaces
    errors.push({ message: 'Please fill all required fields' });
  }

  if (!validator.isEmail(email)) {
    errors.push({ message: 'Email address is incorrect' });
  }

  if (!validator.isLength(password, { min: 6 })) {
    errors.push({ message: 'Password should have at least 6 characters' });
  }

  if (!validator.equals(password, password2)) {
    errors.push({ message: "Passwords Don't match" });
  }

  return errors;
}

export default router;

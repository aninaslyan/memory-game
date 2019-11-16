import Router from 'koa-router';
import userCtr from '../controllers/userController';
import validator from 'validator';

const router = new Router({ prefix: '/users' });

router.get('/:id/score', async (ctx, next) => {
  let score = await userCtr.userScore(ctx.params.id);
  ctx.response.body = score;
});

router.put('/:id/update-score', async (ctx, next) => {
  const userWithUpdatedScore = await userCtr.userUpdateScore(ctx.params.id, ctx.query.score);
  ctx.response.body = userWithUpdatedScore;
});

router.get('/rating', async (ctx, next) => {
  let sortedUsersByScore = await userCtr.usersByScores();
  ctx.response.body = sortedUsersByScore;
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

router.post('/login', async (ctx, next) => {
  const user = await userCtr.login(ctx.query);
  ctx.response.body = user;
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

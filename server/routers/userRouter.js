import Router from 'koa-router';
import userCtr from '../controllers/userController';

const router = new Router({ prefix: '/users' });

router.get('/:id/score', async (ctx, next) => {
  let score = await userCtr.userScore(ctx.params.id);
  ctx.response.body = score;
});

router.get('/scores', (ctx, next) => {
});

router.post('/register', async (ctx, next) => {
  const user = await userCtr.register(ctx.query);
  ctx.response.body = user;
});

router.post('/login', (ctx, next) => {
});

export default router;

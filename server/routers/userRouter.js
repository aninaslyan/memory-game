import Router from 'koa-router';
import userCtr from '../controllers/userController';

const router = new Router({prefix: '/users'});

router.get('/:id/score', async (ctx, next) => {
  let data = await userCtr.userScore(ctx.params.id);
  ctx.response.body = `${JSON.stringify(data)}`;
});

router.get('/scores', async (ctx, next) => {
});

router.post('/register', async (ctx, next) => {
});

router.post('/login', async (ctx, next) => {
});

export default router;

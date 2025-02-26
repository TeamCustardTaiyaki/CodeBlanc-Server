import { Hono, Context } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { HonoEnv } from './types'
import { createNewGame, nextQuiz, selectQuiz } from './lib/quiz'


const app = new Hono<HonoEnv>()
const version = 'v1'

app.use('*', cors())

app.get(`${version}/quiz/next`, async (c) => {
  return c.json(JSON.parse(await nextQuiz(c, Number(c.req.query("level")))))
})

app.get(`${version}/quiz/select`, async (c) => {
  return c.json(JSON.parse(await selectQuiz(c, Number(c.req.query("id")))))
})

export default app

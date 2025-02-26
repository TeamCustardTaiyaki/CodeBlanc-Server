import { v4 as uuidv4 } from 'uuid'
import { getDrizzle } from '../db/clients'
import { quiz } from '../db/schema'
import { Context } from 'hono'
import { sql, eq} from 'drizzle-orm'

export const nextQuiz = async (app: Context, level: number) => {
    const db = getDrizzle(app)
    try {
        const quizData = await db.select().from(quiz).orderBy(sql`RANDOM()`).where(eq(quiz.level, level)).limit(1)
        return quizData[0].question
    } catch (error) {
        console.error(error)
        return "error"
    }
}

export const selectQuiz = async (app: Context, id: number) => {
    const db = getDrizzle(app)
    try {
        const quizData = await db.select().from(quiz).where(eq(quiz.id, id))
        return quizData[0].question
    } catch (error) {
        console.error(error)
        return "error"
    }
}

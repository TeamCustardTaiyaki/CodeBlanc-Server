import { sql } from "drizzle-orm"
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const quiz = sqliteTable("quiz", {
    id: integer().notNull(),
    level: integer().notNull(),
    question: text().notNull(),
    answer: integer().notNull()
})
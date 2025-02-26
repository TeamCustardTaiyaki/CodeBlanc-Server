import { drizzle } from "drizzle-orm/d1"
import type { Context } from "hono"
import type { HonoEnv } from "../types"

export const getDrizzle = (c: Context<HonoEnv>) => drizzle(c.env.DB)




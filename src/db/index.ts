import { neon, neonConfig } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

neonConfig.fetchConnectionCache = true

export const sql = neon(process.env.DATABASE_URL as string)

export const db = drizzle(sql)

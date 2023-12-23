import { Config } from "drizzle-kit"

import * as dotenv from "dotenv"

dotenv.config({
  path: ".env.local",
})

export default {
  schema: "./app/lib/schema.ts",
  driver: "mysql2",
  dbCredentials: {
    host: process.env.DATABASE_HOST!,
    user: process.env.DATABASE_USERNAME!,
    password: process.env.DATABASE_PASSWORD!,
    database: "quickdict",
  },
  out: "./drizzle",
} satisfies Config

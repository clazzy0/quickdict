import { Config } from "drizzle-kit"

import * as dotenv from "dotenv"

dotenv.config({
  path: ".env",
})

export default {
  schema: "./app/lib/schema.ts",
  driver: "mysql2",
  dbCredentials: {
    host: process.env.DATABASE_HOST as string,
    user: process.env.DATABASE_USERNAME as string,
    password: process.env.DATABASE_PASSWORD as string,
    database: "quickdict",
  },
  out: "./drizzle",
} satisfies Config

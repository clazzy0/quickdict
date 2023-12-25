import * as dotenv from "dotenv"
import type { Config } from "drizzle-kit"

dotenv.config({
  path: ".env",
})

export default {
  schema: "./src/db/schema/*",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
  verbose: true,
  strict: true,
  out: "./drizzle",
} satisfies Config

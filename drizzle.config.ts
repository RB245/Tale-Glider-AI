import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./config/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://Tale-Glider-AI_owner:R9ucxZpt7JKU@ep-gentle-thunder-a594lwax.us-east-2.aws.neon.tech/Tale-Glider-AI?sslmode=require',
  },
  verbose: true,
  strict: true,
})
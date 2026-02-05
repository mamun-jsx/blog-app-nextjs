import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

export const env = createEnv({
  server: {
    BACKEND_URL: z.url(),
    BACKEND_API: z.url(),
    FRONTEND_API: z.url(),
    API_URL: z.url(),
    AUTH_URL: z.url(),
  },
  runtimeEnv: {
    BACKEND_URL: process.env.BACKEND_URL,
    BACKEND_API: process.env.BACKEND_API,
    FRONTEND_API: process.env.FRONTEND_API,
    API_URL: process.env.API_URL,
    AUTH_URL: process.env.AUTH_URL,
  },
});
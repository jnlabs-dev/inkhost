import { z } from "zod";
import { STUDIO_ROLE, ARTIST_ROLE, CLIENT_ROLE } from "@/constants/roles";

export const registerSSOCallbackFormSchema = z.object({
  role: z.enum([STUDIO_ROLE, ARTIST_ROLE, CLIENT_ROLE]),
  username: z
    .string()
    .min(4, "Username must be at least 4 characters")
    .max(64, "Username must be at most 64 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores allowed"),
});

export type RegisterSSOCallbackFormValues = z.infer<typeof registerSSOCallbackFormSchema>;

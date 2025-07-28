import { z } from "zod";
import { STUDIO_ROLE, ARTIST_ROLE, CLIENT_ROLE } from "@/constants/roles";
import { getPasswordStrengthLevel } from '@/lib/validation/passwordStrength';

export const registerFormSchema = z.object({
  role: z.enum([STUDIO_ROLE, ARTIST_ROLE, CLIENT_ROLE]),
  email: z.email("Invalid email address"),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  password: z
    .string()
    .min(1, "Password is required")
    .max(100, "Password too long")
    .refine(
      (val) => getPasswordStrengthLevel(val) > 2,
      {
        message: "",
      }
    ),
  username: z
    .string()
    .min(4, "Username must be at least 4 characters")
    .max(64, "Username must be at most 64 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores allowed"),
});

export type RegisterFormValues = z.infer<typeof registerFormSchema>;

import { Role } from '@/types/globals'

import { LucideIcon, HousePlus, PenTool, CircleUserRound, KeyRound } from "lucide-react"

export const STUDIO_ROLE: Role = 'studio';
export const ARTIST_ROLE: Role = 'artist';
export const CLIENT_ROLE: Role = 'client';
export const ADMIN_ROLE: Role = 'admin';

export const USER_ROLE_ICON: Record<Role, LucideIcon> = {
  [STUDIO_ROLE]: HousePlus,
  [ARTIST_ROLE]: PenTool,
  [CLIENT_ROLE]: CircleUserRound,
  [ADMIN_ROLE]: KeyRound
}
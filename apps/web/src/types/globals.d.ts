export {}

export type Role = 'STUDIO' | 'ARTIST' | 'CLIENT' | 'ADMIN'

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Role
      onboardingComplete?: boolean
    }
  }
}
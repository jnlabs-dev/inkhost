export {}

export type Role = 'studio' | 'artist' | 'client' | 'admin'

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Role
      onboardingComplete?: boolean
    }
  }
}
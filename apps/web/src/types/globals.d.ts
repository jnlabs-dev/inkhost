export {}

export type Roles = 'studio' | 'artist' | 'client' | 'admin'

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles
      onboardingComplete?: boolean
    }
  }
}
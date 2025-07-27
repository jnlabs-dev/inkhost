import { Shell } from "@/components/layout/Shell"
import { RegisterForm } from "@/components/Register/RegisterForm"
import { Role } from '@/types/globals'
import { STUDIO_ROLE, ARTIST_ROLE, CLIENT_ROLE } from '@/constants/roles'

export default async function RegisterPage() {
  return <Shell>
    <RegisterForm />
  </Shell>
}

export async function generateMetadata() {
  return {
    title: 'Create account',
  }
}
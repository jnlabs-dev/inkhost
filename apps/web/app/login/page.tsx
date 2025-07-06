import { Shell } from "@/components/layout/Shell"
import { LoginForm } from "@/components/Login/LoginForm"


export default async function RegisterPage() {
  return <Shell>
    <LoginForm />
  </Shell>
}

export async function generateMetadata() {
  return {
    title: `Login`,
  }
}
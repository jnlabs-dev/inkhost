import { Shell } from "@/components/layout/Shell"
import { RegisterForm } from "@/components/Register/RegisterForm"
import { Role } from '@/types/globals'
import { STUDIO_ROLE, ARTIST_ROLE, CLIENT_ROLE } from '@/constants/roles'

type PageParams = {
  role: Role;
}

export default async function RegisterPage({ params }: { params: Promise<PageParams> }) {
  const resolvedParams = await params;
  return <Shell>
    <RegisterForm initialRole={resolvedParams.role} />
  </Shell>
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }) {
  const resolvedParams = await params;
  return {
    title: `Register as ${resolvedParams.role}`,
  }
}

export function generateStaticParams() {
  return [
    { role: STUDIO_ROLE },
    { role: ARTIST_ROLE },
    { role: CLIENT_ROLE },
  ]
}

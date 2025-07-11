import { Shell } from "@/components/layout/Shell"
import { RegisterForm } from "@/components/Register/RegisterForm"
import { Role } from '@/types/globals'
import { STUDIO_ROLE, ARTIST_ROLE, CLIENT_ROLE } from '@/constants/roles'

type PageParams = {
  type: Role;
}

export default async function RegisterPage({ params }: { params: Promise<PageParams> }) {
  const resolvedParams = await params;
  return <Shell>
    <RegisterForm initialType={resolvedParams.type} />
  </Shell>
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }) {
  const resolvedParams = await params;
  return {
    title: `Register as ${resolvedParams.type}`,
  }
}

export function generateStaticParams() {
  return [
    { type: STUDIO_ROLE },
    { type: ARTIST_ROLE },
    { type: CLIENT_ROLE },
  ]
}

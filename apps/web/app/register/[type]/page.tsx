import { Shell } from "@/components/layout/Shell"
import { RegisterForm } from "@/components/Register/RegisterForm"
import { UserRole, USER_ROLES } from "@/constants/roles"

type PageParams = {
  type: UserRole;
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
    { type: USER_ROLES.ARTIST },
    { type: USER_ROLES.STUDIO },
    { type: USER_ROLES.CLIENT },
  ]
}

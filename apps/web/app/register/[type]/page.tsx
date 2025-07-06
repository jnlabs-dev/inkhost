import { RegisterForm } from "@/components/Register/RegisterForm"
import { UserRole, USER_ROLES } from "@/constants/roles"


export default function RegisterPage({ params }: { params: { type: UserRole } }) {
  return <RegisterForm initialType={params.type} />
}

export function generateStaticParams() {
  return [
    { type: USER_ROLES.ARTIST },
    { type: USER_ROLES.STUDIO },
    { type: USER_ROLES.CLIENT },
  ]
}

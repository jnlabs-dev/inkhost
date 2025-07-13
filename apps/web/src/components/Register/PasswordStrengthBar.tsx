import { CheckCircle, XCircle } from "lucide-react"
import { getPasswordChecks, getPasswordStrengthLevel } from "@/lib/validation/passwordStrength"
import { cn } from "@/lib/utils"

export function PasswordStrengthBar({ className, password }: { password: string, className?: string }) {
  const level = getPasswordStrengthLevel(password)
  const checks = getPasswordChecks(password)

  const segments = [0, 1, 2].map((i) => (
    <div
      key={i}
      className={cn(
        "h-2 flex-1 rounded",
        i < level ? "bg-green-700" : "bg-gray-200"
      )}
    />
  ))

  const CheckItem = ({ label, pass }: { label: string; pass: boolean }) => (
    <li className="flex items-center text-sm text-muted-foreground gap-1">
      {pass ? <CheckCircle className="text-green-700 w-4 h-4" /> : <XCircle className="text-red-600 w-4 h-4" />}
      {label}
    </li>
  )

  return (
    password.length ? (
      <div className={cn("space-y-2", className)}>
        <div className="flex gap-1">{segments}</div>
        <ul className="space-y-1">
          <CheckItem label="At least 1 uppercase" pass={checks.hasUppercase} />
          <CheckItem label="At least 1 number" pass={checks.hasNumber} />
          <CheckItem label="At least 8 characters" pass={checks.minLength} />
        </ul>
      </div>
    ) : null
  )
}

import { Shell } from "@/components/layout/Shell";
import { UserProfile } from "@clerk/nextjs"

export default function AdminDashboard() {
  return (
    <Shell className="h-full flex flex-col overflow-hidden">
      <UserProfile
        appearance={{
          elements: {
            rootBox: 'w-full h-full flex-1 flex flex-col',
            cardBox: 'w-full flex-1 border-none shadow-none',
            navbar: 'bg-white',
            scrollBox: 'rounded-none'
          }
        }}
      />
    </Shell>
  );
}
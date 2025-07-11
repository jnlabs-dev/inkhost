import { Shell } from "@/components/layout/Shell";

export default function AdminDashboard() {
  return (
    <Shell>
      Admin
      <p>This is the protected admin dashboard restricted to users with the `admin` role.</p>
    </Shell>
  );
}
import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/admin/LogoutButton";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { requireAdmin } from "@/lib/auth/session";

export default async function AdminDashboardPage() {
  const adminUser = await requireAdmin();
  if (!adminUser) {
    redirect("/admin/login");
  }

  return (
    <Container className="py-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <Heading as="h1" size="h2">
            Dashboard
          </Heading>
          <Text muted size="sm" className="mt-1">
            Signed in as {adminUser.name} ({adminUser.email})
          </Text>
        </div>
        <LogoutButton />
      </div>
      <Text muted>
        The full admin dashboard — inquiries, projects, services, and site content — is under
        construction.
      </Text>
    </Container>
  );
}

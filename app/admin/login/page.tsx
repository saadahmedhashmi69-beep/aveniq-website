import { Suspense } from "react";
import { LoginForm } from "@/components/admin/LoginForm";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

export const metadata = {
  title: "Sign in",
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Container className="max-w-md">
        <div className="rounded-lg border border-edge-strong bg-surface p-8">
          <Heading as="h1" size="h2" className="mb-2">
            Aveniq Admin
          </Heading>
          <Text muted size="sm" className="mb-8">
            Sign in to manage site content, projects, and inquiries.
          </Text>
          <Suspense>
            <LoginForm />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}

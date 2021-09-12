import Layout from "~/components/layout";
import Container from "~/components/ui/container";
import Input from "~/components/ui/input";

export default function Signin() {
  return (
    <Layout headerProps={{ withBorder: true }}>
      <section className="py-16">
        <Container maxW="max-w-md" className="flex flex-col items-center px-12">
          <h1 className="text-4xl font-bold pb-8">Login to Dekoo</h1>

          <Input
            type="text"
            name="email"
            id="email"
            autoComplete="email"
            className="mb-3.5"
            placeholder="Email Address"
          />

          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            placeholder="Password"
            showPasswordToggle
          />
        </Container>
      </section>
    </Layout>
  );
}

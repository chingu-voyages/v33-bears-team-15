import GoogleIcon from "~/assets/icons/googleIcon";
import MailIcon from "~/assets/icons/mailIcon";
import Link from "~/components/common/link";
import Layout from "~/components/layout";
import Button from "~/components/ui/button";
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

          <Button variant="primary" size="full" className="mt-3.5">
            <MailIcon className="w-6 mr-2" /> Continue with Email
          </Button>

          <Button variant="google" size="full" className="mt-3.5">
            <GoogleIcon className="w-6 mr-2" /> Continue with Google
          </Button>

          <p className="mt-14 w-full pt-5 border-t text-lg border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold text-center">
            Don&apos;t have an account?
            <Link
              href="/signup"
              className="text-green-600 dark:text-green-400 hover:underline"
            >
              {" "}
              Sign Up
            </Link>
          </p>
        </Container>
      </section>
    </Layout>
  );
}

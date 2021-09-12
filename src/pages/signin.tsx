import Image from "next/image";
import Link from "~/components/common/link";
import Container from "~/components/ui/container";

export default function Signin() {
  return (
    <section className="bg-hero h-hero -translate-y-24 bg-no-repeat bg-center bg-cover flex items-center pt-20">
      <Container>
        <Link href="/">
          <Image src="/images/logo.png" width={200} height={48} />
        </Link>
      </Container>
    </section>
  );
}

import Container from '~/components/ui/container';
import Link from '../common/link';

export default function Hero() {
  return (
    <section className="bg-hero h-hero -translate-y-24 bg-no-repeat bg-center bg-cover flex items-center pt-20">
      <Container>
        <h1 className="text-5xl font-bold max-w-lg pb-4 text-gray-50 leading-[3.45rem]">
          Endless entertainment and knowledge
        </h1>
        <p className="text-xl text-primary font-bold pb-16">Read anytime, anywhere.</p>
        <Link
          href="/signup"
          className="bg-gray-100 text-gray-800 uppercase hover:border-gray-300 hover:shadow hover:opacity-90 hover:text-gray-900 border border-gray-200 py-3.5 px-12 flex justify-center items-center rounded-sm font-bold tracking-wide"
        >
          Get started for free
        </Link>
      </Container>
    </section>
  );
}

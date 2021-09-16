import Link from './common/link';
import Container from './ui/container';
import quickLinks from '~data/quickLinks';

export default function Footer(): JSX.Element {
  return (
    <section className="pt-44 pb-44">
      <Container className="">
        <div className="flex justify-center flex-wrap">
          <ul className="flex flex-wrap list-none">
            {quickLinks.map(({ hRef, description }) => (
              <Link href={hRef} key={description}>
                <li className="px-7">{description}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex justify-center flex-wrap">
          <Link
            href="/"
            className="mt-5 bg-gray-100 text-gray-800 uppercase hover:border-gray-300 hover:shadow hover:opacity-90 hover:text-gray-900 border border-gray-200 py-3.5 px-12 flex justify-center items-center rounded-sm font-bold tracking-wide"
          >
            Add a Book
          </Link>
        </div>
        <p className="text-center py-6">
          Copyright © 2021 DECKOO, Inc | All rights reserved.
        </p>
      </Container>
    </section>
  );
}

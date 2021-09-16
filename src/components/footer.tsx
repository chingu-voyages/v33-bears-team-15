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
        <p className="text-center py-6">
          Copyright © 2021 DECKOO, Inc | All rights reserved.
        </p>
      </Container>
    </section>
  );
}

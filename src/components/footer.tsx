import Link from './common/link';

export default function Footer(): JSX.Element {
  return (
    <section className="w-full flex justify-center pt-44">
      <div>
        <div>
          <ul className="flex list-none justify-around">
            <Link href="/ ">
              <li className="px-7">Home</li>
            </Link>
            <Link href="/ ">
              <li className="px-7">About</li>
            </Link>
            <Link href="/ ">
              <li className="px-7">Authors</li>
            </Link>
            <Link href="/ ">
              <li className="px-7">Publishers</li>
            </Link>
            <Link href="/ ">
              <li className="px-7">FAQ</li>
            </Link>
            <Link href="/signin">
              <li className="px-7">Sign in</li>
            </Link>
            <Link href="/ ">
              <li className="px-7">Read</li>
            </Link>
            <Link href="/ ">
              <li className="px-7">Privacy Statement</li>
            </Link>
            <Link href="/ ">
              <li>Terms of Service</li>
            </Link>
          </ul>
        </div>
        <p className="text-center py-6">
          DECKOO © 2021 | All rights reserved. Terms under which this service is provided
          to you. Privacy Policy.
        </p>
      </div>
    </section>
  );
}

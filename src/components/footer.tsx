import Image from 'next/image';
import Link from '~components/common/link';
import List from '~components/ui/list';
import Container from '~components/ui/container';
import quickLinks from '~data/footer/quickLinks';
import legal from '~data/footer/legal';
import developers from '~data/footer/developers';

export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className="border-t border-b border-gray-200 dark:border-gray-700 py-16">
        <Container>
          <div className="flex md:flex-row flex-col xl:space-x-20 lg:space-x-14 md:space-x-8">
            <div className="flex flex-col xl:max-w-sm md:max-w-xs max-w-sm">
              <Link href="/" title="Dekoo Branding">
                <Image width={125} height={37} src="/images/logo.png" />
              </Link>

              <p className="text-lg mt-4 dark:text-gray-200 text-gray-700">
                Provides access to free reading titles along with accessible prices for
                anyone and everyone.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 grid-cols-1 md:gap-7 sm:gap-16 gap-8 w-full md:mt-0 sm:mt-10 mt-8">
              <List
                title="Company"
                data={quickLinks}
                listItemProps={{ withSpace: false }}
              />
              <List
                title="Developers"
                data={developers}
                listItemProps={{ withSpace: false }}
              />
              <List title="Legal" data={legal} listItemProps={{ withSpace: false }} />
            </div>
          </div>
        </Container>
      </div>

      <div className="py-6 bg-gray-100 dark:bg-gray-700">
        <Container className="flex sm:flex-row flex-col-reverse justify-between">
          <p className="text-gray-500 dark:text-gray-200 sm:mt-0 mt-4">
            Copyright © {new Date(Date.now()).getFullYear()} DECKOO | All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}

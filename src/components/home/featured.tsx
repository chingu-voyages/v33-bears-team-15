import Image from 'next/image';
import Container from '~/components/ui/container';
import Button from '~/components/ui/button';
import Link from '../common/link';

export default function Featured() {
  return (
    <section className="py-10">
      <Container className="flex-wrap flex">
        <div className="lg:px-4 lg:w-1/3 w-full">
          <div className="sm:pl-20 pl-6 pb-8">
            <p className="uppercase font-semibold text-lg pb-4">Featured</p>
            <h2 className="text-6xl leading-[4.35rem] pb-3.5">
              Read <strong>All</strong>
              <br /> the Newest <strong>Books</strong>
            </h2>
            <Button variant="outlined" size="normal" as={Link} href="/library">
              Browse Categories
            </Button>
          </div>

          <div className="lg:mb-0 mb-20 flex flex-col">
            <Image
              src="https://imgv2-1-f.scribdassets.com/img/word_document/353532808/original/216x287/5bbe50bffc/1631631824?v=1"
              height="675"
              width="540"
              priority
            />
            <h3 className="text-3xl text-green-500 dark:text-green-400 pt-3 font-bold">
              Unfu*k Yourself: Get Out of Your Head and into Your Life
            </h3>
            <p className="text-xl font-semibold pb-8 text-gray-600 dark:text-gray-50">
              by Gary John Bishop
            </p>

            <Button variant="read" size="normal" as={Link} href="/library">
              Read Now
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:px-4 w-full lg:w-1/3 ">
          <div className="flex lg:flex-col sm:flex-row flex-col">
            <div className="mb-20 lg:mr-0 md:mr-8 mr-5 px-2.5">
              <Image
                src="https://imgv2-2-f.scribdassets.com/img/word_document/249309559/original/216x287/f8bc3370a4/1630952632?v=1"
                alt="The Man in the High Castle"
                height="435.5"
                width="370"
                priority
              />
              <h3 className="text-3xl text-green-500 dark:text-green-400 pt-3 font-bold">
                The Man in the High Castle
              </h3>
              <p className="text-xl font-semibold pb-8 text-gray-600 dark:text-gray-50">
                by Philip K. Dick
              </p>
              <Button variant="read" size="normal" as={Link} href="/library">
                Read Now
              </Button>
            </div>
            <div className="sm:mb-0 mb-20 px-2.5">
              <Image
                src="https://imgv2-2-f.scribdassets.com/img/word_document/373774772/original/216x287/c4721f8853/1631628961?v=1"
                alt="My Dear Hamilton"
                height="435.5"
                width="370"
                priority
              />
              <h3 className="text-3xl text-green-500 dark:text-green-400 pt-3 font-bold">
                My Dear Hamilton
              </h3>
              <p className="text-xl font-semibold pb-8 text-gray-600 dark:text-gray-50">
                by Stephanie Dray
              </p>
              <Button variant="read" size="normal" as={Link} href="/library">
                Read Now
              </Button>
            </div>
          </div>
        </div>
        <div className="lg:px-4 flex justify-center lg:mt-48 w-full lg:w-1/3 ">
          <div>
            <Image
              src="https://imgv2-1-f.scribdassets.com/img/word_document/489899062/original/216x287/3319fcdc78/1630650563?v=1"
              alt="The Paris Library"
              height="465.5"
              width="375"
              priority
            />
            <h3 className="text-3xl text-green-500 dark:text-green-400 pt-3 font-bold">
              The Paris Library
            </h3>
            <p className="text-xl font-semibold pb-8 text-gray-600 dark:text-gray-50">
              by Janet Skeslien Charles
            </p>
            <Button variant="read" size="normal" as={Link} href="/library">
              Read Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

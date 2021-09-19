import Image from 'next/image';
import Container from '~/components/ui/container';
import Button from '~/components/ui/button';
import Link from '~/components/common/link';

export default function MostRead() {
  return (
    <section className="pt-12 pb-24">
      <Container>
        <p className="uppercase font-semibold text-lg pb-5 sm:pl-20 pl-6">All Time</p>
        <h2 className="text-6xl w-full pb-10 sm:pl-20 pl-6">
          <span className="font-bold uppercase">Most</span> Read Books
        </h2>
        <div className="flex-wrap flex justify-center">
          <div className="py-5 sm:mr-5 w-[400px]">
            <Image
              src="https://imgv2-1-f.scribdassets.com/img/word_document/322011391/original/216x287/9d5f06ee76/1631959959?v=1"
              alt="The Subtle Art of Not Giving a F*ck"
              height="685"
              width="520"
            />
            <h3 className="text-3xl text-green-500 dark:text-green-400 pt-3 font-bold">
              The Subtle Art of Not Giving a F*ck
            </h3>
            <p className="text-xl font-semibold text-gray-600 dark:text-gray-50 pb-6">
              by Mark Manson
            </p>
            <Button
              variant="read"
              size="normal"
              className="mt-auto"
              as={Link}
              href="/library"
            >
              Read Now
            </Button>
          </div>
          <div className="py-5 sm:mr-5 w-[400px]">
            <Image
              src="https://imgv2-2-f.scribdassets.com/img/word_document/427205289/original/216x287/5e89bc6a46/1631703176?v=1"
              alt="The Dutch House: A Novel"
              height="685"
              width="520"
            />
            <h3 className="text-3xl text-green-500 dark:text-green-400 pt-3 font-bold">
              The Dutch House: A Novel
            </h3>
            <p className="text-xl font-semibold text-gray-600 dark:text-gray-50 pb-6">
              by Ann Patchett
            </p>
            <Button
              variant="read"
              size="normal"
              className="mt-auto"
              as={Link}
              href="/library"
            >
              Read Now
            </Button>
          </div>
          <div className="py-5 w-[400px]">
            <Image
              src="https://imgv2-2-f.scribdassets.com/img/word_document/249309210/original/216x287/d234d0831a/1631798433?v=1"
              alt="The Handmaid's Tale"
              height="685"
              width="520"
            />
            <h3 className="text-3xl text-green-500 dark:text-green-400 pt-3 font-bold">
              The Handmaid&apos;s Tale
            </h3>
            <p className="text-xl font-semibold text-gray-600 dark:text-gray-50 pb-6">
              by Margaret Atwood
            </p>
            <Button
              variant="read"
              size="normal"
              className="mt-auto"
              as={Link}
              href="/library"
            >
              Read Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Image from 'next/image';
import Container from '~/components/ui/container';
import Button from '~/components/ui/button';

export default function MostRead() {
  return (
    <section className="py-12">
      <Container>
        <p className="uppercase font-semibold text-lg pb-5 sm:pl-20 pl-6">All Time</p>
        <h2 className="text-6xl w-full pb-10 sm:pl-20 pl-6">
          <span className="font-bold uppercase">Most</span> Read Books
        </h2>
        <div className="flex-wrap flex justify-center">
          <div className="py-5 sm:mr-5 w-[400px]">
            <Image src="/images/dangerous-globe.jpeg" height="685" width="520" />
            <h3 className="text-3xl text-green-500 dark:text-green-400 pt-3 font-bold">
              Dangerous Globe
            </h3>
            <p className="text-xl font-semibold text-gray-600 dark:text-gray-50 pb-6">
              by Louis Crewe
            </p>
            <Button variant="read" size="normal" className="mt-auto">
              Read Now
            </Button>
          </div>
          <div className="py-5 sm:mr-5 w-[400px]">
            <Image src="/images/van-winkle.jpeg" height="685" width="520" />
            <h3 className="text-3xl text-green-500 dark:text-green-400 pt-3 font-bold">
              Van Winkle
            </h3>
            <p className="text-xl font-semibold text-gray-600 dark:text-gray-50 pb-6">
              by Danny Rie
            </p>
            <Button variant="read" size="normal" className="mt-auto">
              Read Now
            </Button>
          </div>
          <div className="py-5 w-[400px]">
            <Image src="/images/the-chambers-of-history.jpeg" height="685" width="520" />
            <h3 className="text-3xl text-green-500 dark:text-green-400 pt-3 font-bold">
              The Chambers of History
            </h3>
            <p className="text-xl font-semibold text-gray-600 dark:text-gray-50 pb-6">
              by Nadia Amoki
            </p>
            <Button variant="read" size="normal" className="mt-auto">
              Read Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

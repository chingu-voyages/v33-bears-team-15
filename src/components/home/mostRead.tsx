import Image from 'next/image';
import Container from '~/components/ui/container';
import Button from '~/components/ui/button';

export default function MostRead() {
  return (
    <section className="py-10">
      <h4 className="text-5xl w-full py-7 text-center font-bold">Most Read Books</h4>
      <Container className="md:justify-center px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0 flex-wrap flex">
        <div className="p-4 lg:h-featured w-full md:w-1/2 lg:w-1/3 ">
          <Image src="/images/dangerous-globe.jpeg" height="685" width="600" />
          <h5 className="text-3xl text-primary-700 py-7 text-center font-bold">
            Dangerous Globe
          </h5>
          <h5 className="text-2xl text-center font-bold">Louis Crewe</h5>
          <Button variant="read" size="normal">
            Read Now
          </Button>
        </div>
        <div className="p-4 w-full lg:h-featured md:w-1/2 lg:w-1/3 ">
          <Image src="/images/van-winkle.jpeg" height="685" width="600" />
          <h5 className="text-3xl text-primary-700 py-7 text-center font-bold">
            Van Winkle
          </h5>
          <h5 className="text-2xl text-center font-bold">Danny Rie</h5>
          <Button variant="read" size="normal">
            Read Now
          </Button>
        </div>
        <div className="p-4 w-full lg:h-featured md:w-1/2 lg:w-1/3 ">
          <Image src="/images/the-chambers-of-history.jpeg" height="685" width="600" />
          <h5 className="text-3xl text-primary-700 py-7 text-center font-bold">
            The Chambers of History
          </h5>
          <h5 className="text-2xl text-center font-bold">Nadia Amoki</h5>
          <Button variant="read" size="normal">
            Read Now
          </Button>
        </div>
      </Container>
    </section>
  );
}

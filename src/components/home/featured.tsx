import Image from 'next/image';
import Container from '~/components/ui/container';

export default function Featured() {
  return (
    <section className="my-28">
      <h4 className="text-4xl w-full py-7 text-center font-bold">
        Read all the newest books
      </h4>
      <Container className="md:justify-center px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0 flex-wrap flex">
        <div className="p-4 w-full md:w-1/2 lg:w-1/3 bg-gray-400">
          <div>
            <Image
              src="/images/pexels-jasmin-chew-7647295.jpg"
              height="685"
              width="600"
            />
            <h5 className="text-3xl uppercase py-7 text-center font-bold">
              Lost in the Woods
            </h5>
            <h5 className="text-2xl italic py-7 text-center font-bold">
              Amanda Tolstroy
            </h5>
          </div>
        </div>
        <div className="p-4 w-full h-featured md:w-1/2 lg:w-1/3 bg-gray-500">
          <div>
            <Image src="/images/my-person-shirley.jpeg" height="685" width="600" />
            <h5 className="text-3xl uppercase py-7 text-center font-bold">
              My Person, Shirley
            </h5>
            <h5 className="text-2xl italic py-7 text-center font-bold">Sunset Gumedie</h5>
          </div>
        </div>
        <div className="p-4 w-full h-featured md:w-1/2 lg:w-1/3 bg-gray-600">
          <Image src="/images/the-river-bend.jpeg" height="685" width="600" />
          <h5 className="text-3xl uppercase py-7 text-center font-bold">
            The River Bend
          </h5>
          <h5 className="text-2xl italic py-7 text-center font-bold">Nadia Amoki</h5>
        </div>
      </Container>
    </section>
  );
}

import Image from 'next/image';
import Container from '~/components/ui/container';
import ReadBtn from '~components/readBtn';

export default function BookReview() {
  return (
    <section className="mt-0">
      <h4 className="text-4xl w-full py-7 text-center font-bold">Read a book</h4>
      <Container className="md:justify-center px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0 flex-wrap flex">
        <div className="p-4 w-full md:w-1/2 lg:w-1/2 bg-gray-400">
          <div>
            <Image src="/images/motor-engines.jpeg" height="685" width="600" />
          </div>
        </div>
        <div className="p-4 w-full h-featured md:w-1/2 lg:w-1/3 bg-gray-400">
          <h5 className="text-2xl uppercase py-7 font-bold">Coming Soon</h5>
          <h5 className="text-3xl uppercase py-7 font-bold">Mortal Engines</h5>
          <p className="text-2xl">
            In a post-apocalyptic era where towns are ever changing to survive, two aliens
            come together to stop a dark and sinister conspirancy.
          </p>
          <h5 className="text-2xl italic py-5 font-bold">Roseburg Koo</h5>
          <ReadBtn />
        </div>
      </Container>
    </section>
  );
}

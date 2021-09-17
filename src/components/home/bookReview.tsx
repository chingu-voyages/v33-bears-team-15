import Image from 'next/image';
import Container from '~/components/ui/container';
import Button from '~/components/ui/button';

export default function BookReview() {
  return (
    <section className="pt-20 pb-16">
      <Container className="md:justify-center flex lg:flex-row flex-col-reverse">
        <div className="xl:px-24 lg:px-16 w-full lg:w-1/2 flex justify-center lg:mt-0 mt-12">
          <Image src="/images/motor-engines.jpeg" height="685" width="510" />
        </div>
        <div className="sm:pl-16 pl-0 w-full lg:w-1/2 ">
          <p className="uppercase font-semibold text-lg pb-5 lg:mt-24">Book Review</p>
          <h2 className="text-6xl text-green-500 dark:text-green-400 pb-6 font-semibold">
            Mortal Engines
          </h2>
          <p className="text-xl font-semibold">
            In a post-apocalyptic era where towns are ever changing to survive, two aliens
            come together to stop a dark and sinister conspirancy.
          </p>
          <p className="text-2xl py-5 font-semibold text-gray-600 dark:text-gray-50">
            Roseburg Koo
          </p>
          <Button variant="outlined" size="normal">
            Start Reading Now
          </Button>
        </div>
      </Container>
    </section>
  );
}

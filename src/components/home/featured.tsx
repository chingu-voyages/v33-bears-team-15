import Image from 'next/image';
import Container from '~/components/ui/container';
import image from '../../../public/images/pexels-jasmin-chew-7647295.jpg';

export default function Featured() {
  return (
    <section className="my-28 justify-center flex">
      <Container className="md:justify-center px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0 flex-wrap flex">
        <div className="p-4 w-full md:w-1/2 lg:w-1/3 bg-gray-400">
          <div>
            <h4 className="text-4xl py-7 text-center font-bold">
              Read all the newest books
            </h4>
            <Image src={image} />
          </div>
        </div>
        <div className="w-full h-featured md:w-1/2 lg:w-1/3 bg-gray-500" />
        <div className="w-full h-featured md:w-1/2 lg:w-1/3 bg-gray-600" />
      </Container>
    </section>
  );
}

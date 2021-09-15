import Image from 'next/image';
import Container from '~/components/ui/container';

export default function Trending() {
  return (
    <section className="my-28">
      <h4 className="text-4xl w-full py-7 text-center font-bold">Trending Now</h4>
      <Container className="md:justify-center px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0 flex-wrap flex">
        <div className="p-4 w-full md:w-1/2 lg:w-1/3 bg-gray-400">
          <div>
            <Image src="/images/northern-lights.jpg" height="685" width="600" />
            <h5 className="text-3xl uppercase py-7 text-center font-bold">
              Northern Lights
            </h5>
            <h5 className="text-2xl italic py-7 text-center font-bold">
              Philip Ricktick
            </h5>
          </div>
        </div>
        <div className="p-4 w-full h-featured md:w-1/2 lg:w-1/3 bg-gray-500">
          <div>
            <Image src="/images/ready-for-a-challenge.jpeg" height="685" width="600" />
            <h5 className="text-3xl uppercase py-7 text-center font-bold">
              Ready for a Challenge
            </h5>
            <h5 className="text-2xl italic py-7 text-center font-bold">Gluey Sing</h5>
          </div>
        </div>
        <div className="p-4 w-full h-featured md:w-1/2 lg:w-1/3 bg-gray-600">
          <Image
            src="/images/reflections-of-a-90-yr-old-sage.jpeg"
            height="685"
            width="600"
          />
          <h5 className="text-3xl uppercase py-7 text-center font-bold">
            Reflections of a 90-yr-old Sage
          </h5>
          <h5 className="text-2xl italic py-7 text-center font-bold">Medie Adam</h5>
        </div>
      </Container>
    </section>
  );
}

import Image from 'next/image';
import Container from '~/components/ui/container';
import ReadBtn from '~components/readBtn';

export default function Featured() {
  return (
    <section className="mt-28 mb-5">
      <Container className="md:justify-center px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0 flex-wrap flex">
        <div className="p-4 w-full h-featuredFirst lg:w-1/3 ">
          <h4 className="text-6xl w-full py-7 text-center font-bold">
            Read all
            <br /> the newest books
          </h4>
          <div className="w-full h-2/3">
            <Image
              src="/images/pexels-jasmin-chew-7647295.jpg"
              height="685"
              width="600"
            />
            <h5 className="text-3xl uppercase py-7 text-center font-bold">
              Lost in the Woods
            </h5>
            <h5 className="text-2xl italic text-center font-bold">Amanda Tolstroy</h5>
            <ReadBtn />
          </div>
        </div>
        <div className="flex justify-center p-4 w-full h-featuredFirst lg:w-1/3 ">
          <div>
            <div className="py-5">
              <Image src="/images/my-person-shirley.jpeg" height="342.5" width="300" />
              <h5 className="text-3xl uppercase py-7 text-center font-bold">
                My Person, Shirley
              </h5>
              <h5 className="text-2xl italic pt-0 text-center font-bold">
                Sunset Gumedie
              </h5>
              <ReadBtn />
            </div>
            <div>
              <Image src="/images/northern-lights.jpeg" height="342.5" width="300" />
              <h5 className="text-3xl uppercase py-7 text-center font-bold">
                Northern Lights
              </h5>
              <h5 className="text-2xl italic pt-0 text-center font-bold">
                Sunset Gumedie
              </h5>
              <ReadBtn />
            </div>
          </div>
        </div>
        <div className="lg:p-4 w-full items-center flex justify-center h-featuredFirst lg:w-1/3 ">
          <div className="">
            <Image src="/images/the-river-bend.jpeg" height="342.5" width="300" />
            <h5 className="text-3xl uppercase py-7 text-center font-bold">
              The River Bend
            </h5>
            <h5 className="text-2xl italic text-center font-bold">Nadia Amoki</h5>
            <ReadBtn />
          </div>
        </div>
      </Container>
    </section>
  );
}

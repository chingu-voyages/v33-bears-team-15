import Image from 'next/image';
import Container from '~/components/ui/container';
import Button from '~/components/ui/button';

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
            <Button variant="outlined" size="normal">
              Browse Categories
            </Button>
          </div>

          <div className="lg:mb-0 mb-20 flex flex-col">
            <Image
              src="/images/pexels-jasmin-chew-7647295.jpg"
              height="655"
              width="540"
            />
            <h3 className="text-3xl text-primary-700 pt-3 font-bold">
              Lost in the Woods
            </h3>
            <p className="text-xl font-bold pb-8">by Amanda Tolstroy</p>
            <Button variant="read" size="normal">
              Read Now
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:px-4 w-full lg:w-1/3 ">
          <div className="flex lg:flex-col sm:flex-row flex-col">
            <div className="mb-20 lg:mr-0 md:mr-8 mr-5 px-2.5">
              <Image src="/images/my-person-shirley.jpeg" height="415.5" width="340" />
              <h3 className="text-3xl text-primary-700 pt-3 font-bold">
                My Person, Shirley
              </h3>
              <p className="text-xl font-bold pb-8">by Sunset Gumedie</p>
              <Button variant="read" size="normal">
                Read Now
              </Button>
            </div>
            <div className="sm:mb-0 mb-20 px-2.5">
              <Image src="/images/northern-lights.jpeg" height="415.5" width="340" />
              <h3 className="text-3xl text-primary-700 pt-3 font-bold">
                Northern Lights
              </h3>
              <p className="text-xl font-bold pb-8">by Sunset Gumedie</p>
              <Button variant="read" size="normal">
                Read Now
              </Button>
            </div>
          </div>
        </div>
        <div className="lg:px-4 flex justify-center lg:mt-48 w-full lg:w-1/3 ">
          <div>
            <Image src="/images/the-river-bend.jpeg" height="425.5" width="340" />
            <h3 className="text-3xl text-primary-700 pt-3 font-bold">The River Bend</h3>
            <p className="text-xl font-bold pb-8">by Nadia Amoki</p>
            <Button variant="read" size="normal">
              Read Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

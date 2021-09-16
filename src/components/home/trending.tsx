import Image from 'next/image';
import Container from '~/components/ui/container';
import { ReadBtn } from '~/components/ui/button';
import SearchIcon from '~/assets/icons/searchIcon';
import useTheme from '~/hooks/use-theme';

export default function Trending() {
  const { isDark } = useTheme();
  const fill = isDark ? 'white' : 'black';

  return (
    <section className="py-10">
      <h4 className="text-5xl w-full py-7 text-center font-bold">Trending Now</h4>
      <Container className="md:justify-center px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0 flex-wrap flex">
        <div className="p-4 w-full md:w-1/3 lg:w-1/5 ">
          <Image src="/images/best-buddies.jpg" height="342.5" width="300" />
          <h5 className="text-3xl text-primary-700 py-7 text-center font-bold">
            Best Buddies
          </h5>
          <h5 className="text-2xl text-center font-bold">Greene Loungiwe</h5>
          <ReadBtn />
        </div>
        <div className="p-4 w-full md:w-1/3 lg:w-1/5 ">
          <div>
            <Image src="/images/ready-for-a-challenge.jpeg" height="342.5" width="300" />
            <h5 className="text-3xl text-primary-700 py-7 text-center font-bold">
              Ready for a Challenge
            </h5>
            <h5 className="text-2xl text-center font-bold">Gluey Sing</h5>
            <ReadBtn />
          </div>
        </div>
        <div className="p-4 w-full md:w-1/3 lg:w-1/5 ">
          <Image
            src="/images/reflections-of-a-90-yr-old-sage.jpeg"
            height="342.5"
            width="300"
          />
          <h5 className="text-3xl text-primary-700 py-7 text-center font-bold">
            Reflections of a 90-yr-old
          </h5>
          <h5 className="text-2xl text-center font-bold">Medie Adam</h5>
          <ReadBtn />
        </div>
        <div className="p-4 w-full md:w-1/3 lg:w-1/5 ">
          <Image src="/images/finding-home.jpeg" height="342.5" width="300" />
          <h5 className="text-3xl text-primary-700 py-7 text-center font-bold">
            Finding Home
          </h5>
          <h5 className="text-2xl text-center font-bold">Evelyn Stoopie</h5>
          <ReadBtn />
        </div>
        <div className="p-4 w-full md:w-1/3 lg:w-1/5 ">
          <h4 className="text-4xl w-full py-7 font-bold">More...</h4>
          <section className="relative flex flex-wrap py-8">
            <SearchIcon
              className="w-6 absolute top-12 left-3 hover:border-green-500"
              fill={fill}
            />
            <input
              id="search"
              type="text"
              name="search"
              placeholder="Search for a book..."
              className="mt-5 ml-12 px-4 py-2 rounded-lg border border-green-500 text-green-600 placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-200"
            />
          </section>
          <button
            type="submit"
            className="font-bold bg-transparent hover:bg-primary-500 text-primary-700 hover:text-gray-800 py-2 px-4 border border-primary-700 hover:border-transparent rounded"
          >
            SEE ALL BOOKS
          </button>
          <button
            type="submit"
            className="mt-5 font-bold bg-transparent hover:bg-primary-500 text-primary-700 hover:text-gray-800 py-2 px-4 border border-primary-700 hover:border-transparent rounded"
          >
            SEE ALL TRENDING NOW
          </button>
          <button
            type="submit"
            className="mt-5 font-bold bg-transparent hover:bg-primary-500 text-primary-700 hover:text-gray-800 py-2 px-4 border border-primary-700 hover:border-transparent rounded"
          >
            ADD A BOOK
          </button>
        </div>
      </Container>
    </section>
  );
}

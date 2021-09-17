import Container from '~/components/ui/container';
import SearchIcon from '~/assets/icons/searchIcon';
import Card from './card';
import Button from '../ui/button';

export default function Trending() {
  return (
    <section className="py-10">
      <Container>
        <p className="uppercase font-semibold text-lg pb-5 sm:pl-20 pl-6">Trending</p>
        <h4 className="text-6xl w-full pb-12 sm:pl-20 pl-6">
          <span className="font-bold uppercase">Tops</span> The Charts
        </h4>
        <div className="flex sm:flex-row flex-col-reverse">
          <div className="flex-wrap flex lg:justify-start justify-center">
            <Card
              title="Best Buddies"
              author="Greene Loungiwe"
              src="/images/best-buddies.jpg"
            />
            <Card
              title="Ready for a Challenge"
              author="Gluey Sing"
              src="/images/ready-for-a-challenge.jpeg"
            />
            <Card
              title="Reflections of a 90-yr-old"
              author="Medie Adam"
              src="/images/reflections-of-a-90-yr-old-sage.jpeg"
            />
            <Card
              title="Finding Home"
              author="Evelyn Stoopie"
              src="/images/finding-home.jpeg"
            />
          </div>

          <aside className="min-w-[210px] 2xl:max-w-[320px] sm:max-w-[210px] w-full sm:pl-0 sm:pb-0 pl-6 pb-8 sm:mt-2">
            <h4 className="text-xl font-bold pb-2 sm:block hidden">More...</h4>

            <div className="flex rounded-md shadow-sm mb-8">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-500 text-sm">
                <SearchIcon className="w-5 hover:border-green-500" />
              </span>
              <input
                type="search"
                name="search"
                id="search"
                className="block focus:ring-0 w-full shadow-sm border-gray-300 dark:border-gray-700 rounded-r-md bg-gray-100 dark:bg-gray-800 dark:placeholder-gray-400 placeholder-gray-500 focus:border-gray-500 dark:focus:border-gray-500 hover:border-gray-500 dark:hover:border-gray-500"
                placeholder="Search for a book..."
              />
            </div>

            <Button
              variant="shadow"
              size="thin"
              className="sm:mb-4 xl:mr-3.5 sm:mr-0 mr-3.5"
              withShadow={false}
            >
              See all books
            </Button>
            <Button variant="shadow" size="thin" withShadow={false}>
              See all trending
            </Button>
          </aside>
        </div>
      </Container>
    </section>
  );
}

import Container from '~/components/ui/container';
import SearchIcon from '~/assets/icons/searchIcon';
import Card from './card';
import Button from '../ui/button';

export default function Trending() {
  return (
    <section className="py-12">
      <Container>
        <p className="uppercase font-semibold text-lg pb-5 sm:pl-20 pl-6">Trending</p>
        <h4 className="text-6xl w-full pb-12 sm:pl-20 pl-6">
          <span className="font-bold uppercase">Tops</span> The Charts
        </h4>
        <div className="flex sm:flex-row flex-col-reverse">
          <div className="flex-wrap flex lg:justify-start justify-center">
            <Card
              title="The Intelligent Investor, Rev. Ed"
              author="Benjamin Graham"
              src="https://imgv2-2-f.scribdassets.com/img/word_document/168907403/original/216x287/184af85d56/1631563264?v=1"
            />
            <Card
              title="The E-Myth Revisited"
              author="Michael E. Gerber"
              src="https://imgv2-1-f.scribdassets.com/img/word_document/163651647/original/216x287/9090d05b6f/1631534025?v=1"
            />
            <Card
              title="Never Split the Difference: Negotiating As If Your Life Depended On It"
              author="Chris Voss"
              src="https://imgv2-1-f.scribdassets.com/img/word_document/310560108/original/216x287/7b8f89909b/1631632115?v=1"
            />
            <Card
              title="Principles: Life and Work"
              author="Ray Dalio"
              src="https://imgv2-2-f.scribdassets.com/img/word_document/357813054/original/216x287/2b5f9477ff/1631155022?v=1"
            />
          </div>

          <aside className="min-w-[210px] 2xl:max-w-[320px] sm:max-w-[210px] w-full sm:pb-0 pb-8 sm:mt-2">
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

import Image from 'next/image';
import BellIcon from '~/assets/icons/bellIcon';
import SearchIcon from '~/assets/icons/searchIcon';
import GroupIcon from '~/assets/icons/groupIcon';
import PlusIcon from '~/assets/icons/plusIcon';
import Avatar from '~/components/avatar';
import Button from '~/components/ui/button';
import { Checkbox } from '~/components/ui/checkbox';
import Search from '../components/search';
import BookListItem from '../components/books/booklistitem';
import books from '~/assets/mock/books.json';

export default function BookList() {
  return (
    <section className="min-h-screen">
      <div className="flex">
        <div className="lg:flex lg:flex-col py-8 border-r-2 hidden lg:w-[240px] p-4">
          <div className="flex justify-between items-center">
            <Image src="/images/logo.png" width={176} height={42} />
            <div className="h-8 w-8 rounded-full bg-gray-200" />
          </div>
          <div className="flex space-x-4 bg-gray-200 p-2 mt-8 rounded-md">
            <Avatar />
            <div className="flex flex-col">
              <h2 className="text-gray-900 font-semibold">Joseph Myalla</h2>
              <p className="text-gray-400 text-sm">admin</p>
            </div>
          </div>
        </div>
        <div />
        <div className="flex flex-col flex-1 m-8">
          <div className="flex justify-between items-center">
            <span className="cursor-pointer">
              <SearchIcon />
            </span>
            <div className="flex items-center w-[200px] justify-between">
              <span className="cursor-pointer block">
                <BellIcon />
              </span>
              <span className="cursor-pointer block">
                <GroupIcon />
              </span>
              <Avatar />
            </div>
          </div>
          <div className="mt-10 space-y-2">
            <h2 className="font-bold text-2xl">Book List</h2>
            <div className="flex flex-col items-end">
              <div className="w-40">
                <Button type="submit" size="full" className="hover:text-gray-100">
                  <PlusIcon className="w-6 mr-2" color="white" />{' '}
                  <span className="text-white">New Book</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-8 p-4 rounded-lg border border-gray-200 relative shadow-md">
            <div className="w-full h-32 z-index z-10 hidden bg-green-500 absolute top-0 left-0 rounded-md" />
            <div className="mt-10 flex items-center justify-between pl-8">
              <Search />
            </div>
            <div className="h-14 rounded-lg bg-gray-200 flex items-center p-8 justify-between">
              <div className="flex space-x-10">
                <Checkbox onChange={() => null} checked={false} />
                <h2>Product</h2>
              </div>
              <div className="flex w-1/2 justify-between">
                <h2>Published on</h2>
                <h2>Status</h2>
                <span className="invisible">;&nbsp</span>
              </div>
            </div>
            <div className="space-y-8">
              {books.map((book) => {
                return <BookListItem key={book.title} {...book} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

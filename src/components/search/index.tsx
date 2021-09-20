import Input from '~/components/ui/input';
import SearchIcon from '../../assets/icons/searchIcon';

export default function Search() {
  return (
    <form onSubmit={() => null} className="">
      <div className="flex items-center border rounded-lg border-gray-300 pl-4">
        <SearchIcon className="w-6 mr-2" color="lightgray" />
        <Input
          type="text"
          className="p-4 border-0 shadow-none focus:w-[600px]"
          name="search"
          id="search"
          placeholder="Search book"
        />
      </div>
    </form>
  );
}

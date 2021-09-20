import Image from 'next/image';
import DotsIcon from '~/assets/icons/dotsIcon';
import { Checkbox } from '~/components/ui/checkbox';

interface BookProps {
  thumbnail: string;
  title: string;
  published: string;
  status: string;
}
export default function BookListItem(props: BookProps) {
  const { thumbnail, title, published, status } = props;
  return (
    <div className="h-14 rounded-lg hover:bg-gray-200 flex items-center p-8 justify-between">
      <div className="flex space-x-10 items-center">
        <Checkbox onChange={() => null} checked={false} />
        <div className="flex items-center justify-between space-x-4">
          <div className="h-12 w-12">
            {' '}
            <Image src={thumbnail} width="100%" height="100%" />
          </div>
          <h2 className="overflow-ellipsis font-semibold">{title}</h2>
        </div>
      </div>
      <div className="flex w-1/2 justify-between items-center">
        <p>{published}</p>
        <p>{status}</p>
        <span className="hover:bg-gray-300 h-12 w-12 lg:flex items-center justify-center rounded-full hidden">
          <DotsIcon />
        </span>
      </div>
    </div>
  );
}

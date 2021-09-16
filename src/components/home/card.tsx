import Image from 'next/image';
import Button from '~/components/ui/button';

export interface ICard {
  title?: string;
  author?: string;
  src?: string;
}

export default function Card({ title, author, src }: ICard): JSX.Element {
  return (
    <div className="flex flex-col mr-5 w-[238px] py-3.5">
      <Image src={src} height="342" width="238" />
      <h5 className="text-xl text-primary-700 pt-3 font-bold">{title}</h5>
      <p className="font-semibold pb-6 text-gray-600 dark:text-gray-50">{author}</p>
      <Button variant="outlined" size="wide" className="mt-auto">
        Read Now
      </Button>
    </div>
  );
}

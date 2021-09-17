import Image from 'next/image';
import Button from '~/components/ui/button';

export interface ICard {
  title?: string;
  author?: string;
  src?: string;
}

export default function Card({ title, author, src }: ICard): JSX.Element {
  return (
    <div className="flex flex-col xs:mr-5 2xl:w-[249px] w-[238px] py-3.5">
      <Image src={src} height="342" width="238" />
      <h5 className="text-2xl text-green-500 dark:text-green-400 pt-3 font-bold">
        {title}
      </h5>
      <p className="font-semibold pb-6 text-gray-600 dark:text-gray-50">by {author}</p>
      <Button variant="read" size="wide" className="mt-auto">
        Read Now
      </Button>
    </div>
  );
}

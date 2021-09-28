import Image from 'next/image';
import { useCallback, useState } from 'react';
import BookmarkIcon from '~/assets/icons/bookmarkIcon';
import Link from '../common/link';
import Rating from '../rating';

export interface ICard {
  name: string;
  author: string;
  src: string;
  rating: number;
  width?: number;
}

export default function Card({ name, author, src, rating, width = 178 }: ICard) {
  const [saved, setSaved] = useState<boolean>(false);

  const toggleSaved = useCallback(() => setSaved((prevVal) => !prevVal), []);

  return (
    <article className="h-card relative w-[182px]">
      <Link href={`/${name}`} className="flex flex-col h-full" title={name}>
        <Image src={src} alt={name} height={198} width={width} />
        <span className="block leading-5 font-semibold line-clamp-2 py-1">{name}</span>
        <span className="block text-sm font-semibold text-gray-400 truncate">
          {author}
        </span>
        <div className="mt-auto flex items-center">
          <Rating initialValue={rating} allowChange={false} className="mr-1" />
          <span className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            ({rating}/5)
          </span>
        </div>
      </Link>

      <button
        type="button"
        onClick={toggleSaved}
        className="absolute bottom-0 right-0"
        title="Save for later"
      >
        <BookmarkIcon solid={saved} className="w-5 dark:text-gray-100" strokeWidth={1} />
      </button>
    </article>
  );
}

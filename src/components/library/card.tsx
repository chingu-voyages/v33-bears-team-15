import Image from 'next/image';
import BookmarkIcon from '~/assets/icons/bookmarkIcon';
import Link from '../common/link';

export interface ICard {
  name: string;
  author: string;
  src: string;
  rating: number;
}

export default function Card({ name, author, src, rating }: ICard) {
  return (
    <article className="mx-2 h-card relative">
      <Link href={`/${name}`} className="flex flex-col h-full" title={name}>
        <Image src={src} alt={name} height={198} width={178} />
        <span className="block leading-5 font-semibold line-clamp-2 py-1">{name}</span>
        <span className="block text-sm font-semibold text-gray-400 truncate">
          {author}
        </span>
        <div className="mt-auto">{rating}</div>
      </Link>

      <button type="button" className="absolute bottom-0 right-0">
        <BookmarkIcon className="w-5" strokeWidth={1} />
      </button>
    </article>
  );
}

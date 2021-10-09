import Image from 'next/image';
import Link from '../common/link';

export interface ICard {
  name: string;
  author: string;
  src: string;
  rating?: number;
}

export default function Card({ name, author, src }: ICard) {
  return (
    <article className="h-card relative w-[182px] mx-2">
      <Link href={`/${name}`} className="flex flex-col h-full" title={name}>
        <Image src={src} alt={name} height={198} width={178} layout="fixed" />
        <span className="block leading-5 font-semibold line-clamp-2 py-1">{name}</span>
        <span className="block text-sm font-semibold text-gray-400 truncate">
          {author}
        </span>
      </Link>
    </article>
  );
}

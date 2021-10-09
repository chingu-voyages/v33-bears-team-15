/* eslint-disable no-nested-ternary */
/* eslint-disable no-use-before-define */
import { useRef } from 'react';
import ChevronLeftIcon from '~/assets/icons/chevronLeftIcon';
import ChevronRightIcon from '~/assets/icons/chevronRightIcon';
import Card, { ICard } from './card';

export interface ICarousel {
  title: string;
  data: ICard[];
}

export default function Carousel({ title, data }: ICarousel) {
  const carouselContainer = useRef<HTMLDivElement | null>(null);
  const handlePrevAction = () => {
    carouselContainer.current.scrollBy({
      top: 0,
      left: -200,
      behavior: 'smooth',
    });
  };
  const handleNextAction = () => {
    carouselContainer.current.scrollBy({
      top: 0,
      left: +200,
      behavior: 'smooth',
    });
  };

  return (
    <div className="my-12 relative">
      <div className="flex sm:flex-row flex-col justify-between sm:items-center">
        <h2 className="font-sans text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center cursor-default">
          {title}
        </h2>
      </div>
      <div className="flex items-center">
        <PrevButton onClick={handlePrevAction} />
        <div
          ref={carouselContainer}
          className="mt-6 cursor-move w-11.5/12 flex overflow-x-hidden w-full"
        >
          {data.map((book) => (
            <Card key={book.name} {...book} />
          ))}
        </div>
        <NextButton onClick={handleNextAction} />
      </div>
    </div>
  );
}

function PrevButton({ className, style, onClick }: any) {
  return (
    <button type="button" onClick={onClick} style={style} className={`${className}`}>
      <ChevronLeftIcon
        className="w-9 p-1.5 bg-gray-800 dark:bg-gray-100 shadow-md text-gray-100 dark:text-gray-800 rounded-full group-hover:text-gray-200 dark:group-hover:text-gray-500"
        strokeWidth={2}
      />
    </button>
  );
}

function NextButton({ className, style, onClick }: any) {
  return (
    <button type="button" onClick={onClick} style={style} className={`${className}`}>
      <ChevronRightIcon
        className="w-9 p-1.5 bg-gray-800 dark:bg-gray-100 shadow-md text-gray-100 dark:text-gray-800 rounded-full group-hover:text-gray-200 dark:group-hover:text-gray-500"
        strokeWidth={2}
      />
    </button>
  );
}

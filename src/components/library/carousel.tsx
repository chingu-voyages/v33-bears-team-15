import Slick from 'react-slick';

import Link from '~components/common/link';
import ChevronLeftIcon from '~/assets/icons/chevronLeftIcon';
import ChevronRightIcon from '~/assets/icons/chevronRightIcon';
import Card, { ICard } from './card';
import { SlickOptions } from './slider';

export interface ICarousel {
  title: string;
  moreHref: string;
  data: ICard[];
  type?: 'recommendation' | 'similar';
  icon?: JSX.Element;
}

function PrevButton({ className, style, onClick }: any) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      className={`${className} group absolute left-2 top-12 z-10 translate-y-full`}
    >
      <ChevronLeftIcon
        className="w-9 p-1.5 bg-gray-800 dark:bg-gray-100 shadow-md text-gray-100 dark:text-gray-800 rounded-full group-hover:text-gray-200 dark:group-hover:text-gray-500"
        strokeWidth={2}
      />
    </button>
  );
}

function NextButton({ className, style, onClick }: any) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      className={`${className} group absolute right-2 top-12 z-10 translate-y-full`}
    >
      <ChevronRightIcon
        className="w-9 p-1.5 bg-gray-800 dark:bg-gray-100 shadow-md text-gray-100 dark:text-gray-800 rounded-full group-hover:text-gray-200 dark:group-hover:text-gray-500"
        strokeWidth={2}
      />
    </button>
  );
}

export default function Carousel({
  title,
  moreHref,
  type = 'recommendation',
  icon,
  data,
}: ICarousel) {
  const defaultOptions: SlickOptions = {
    dots: false,
    infinite: true,
    speed: 650,
    slidesToShow: 6,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: '35px',
    initialSlide: 0,
    arrows: true,
    swipeToSlide: true,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
  };

  return (
    <div className="my-12 relative">
      {type === 'recommendation' ? (
        <div className="flex justify-between items-center">
          <h2 className="font-sans text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center">
            {icon} {title} Recommended For You
          </h2>

          <Link
            href={moreHref}
            title={title}
            className="text-green-600 dark:text-green-400 hover:underline text-sm font-semibold"
          >
            View More
          </Link>
        </div>
      ) : (
        <h2 className="font-sans text-2xl font-semibold text-gray-800 dark:text-gray-300 flex items-center">
          {icon} Similar To: {title}
        </h2>
      )}

      <Slick {...defaultOptions} className="mt-6 cursor-move">
        {data.map((b) => (
          <Card key={b.name} {...b} />
        ))}
      </Slick>
    </div>
  );
}

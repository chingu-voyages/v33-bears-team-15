/* eslint-disable no-nested-ternary */
/* eslint-disable no-use-before-define */
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
  type?: 'recommendation' | 'similar' | 'custom';
  icon?: JSX.Element;
}

const BASE_CARD_WIDTH = 178;

export default function Carousel({
  title,
  moreHref,
  type = 'recommendation',
  icon,
  data,
}: ICarousel) {
  const slidesToShow = 6;
  const totalCardsToShow = slidesToShow <= data.length ? slidesToShow : data.length;

  const defaultOptions: SlickOptions = {
    dots: false,
    infinite: true,
    speed: 450,
    slidesToShow: totalCardsToShow,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    centerMode: data.length > slidesToShow,
    centerPadding: '15px',
    initialSlide: 0,
    arrows: true,
    swipeToSlide: true,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1.7,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="my-12 relative">
      {type === 'recommendation' ? (
        <div className="flex sm:flex-row flex-col justify-between sm:items-center">
          <h2 className="font-sans text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center cursor-default">
            {icon} {title} Recommended For You
          </h2>

          {moreHref && (
            <Link
              href={moreHref}
              title={`View ${title}`}
              className="text-green-600 dark:text-green-400 hover:underline text-sm font-semibold"
            >
              View More
            </Link>
          )}
        </div>
      ) : type === 'similar' ? (
        <h2 className="font-sans text-2xl font-semibold text-gray-800 dark:text-gray-300 flex items-center cursor-default">
          {icon} Similar To: {title}
        </h2>
      ) : (
        <h2 className="font-sans text-2xl font-semibold text-gray-800 dark:text-gray-300 flex items-center cursor-default">
          {icon} {title}
        </h2>
      )}

      <Slick {...defaultOptions} className="mt-6 cursor-move">
        {data.map((b) => (
          <Card key={b.name} width={BASE_CARD_WIDTH} {...b} />
        ))}
      </Slick>
    </div>
  );
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

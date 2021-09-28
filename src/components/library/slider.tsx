import Image from 'next/image';
import Slick, { Settings } from 'react-slick';
import { Dispatch, SetStateAction, useState } from 'react';

import Container from '~/components/ui/container';
import Button from '~/components/ui/button';
import Link from '~/components/common/link';
import ChevronLeftIcon from '~/assets/icons/chevronLeftIcon';
import ChevronRightIcon from '~/assets/icons/chevronRightIcon';
import BookmarkIcon from '~/assets/icons/bookmarkIcon';
import slides, { SlideType } from '~data/slides';

export type SlickOptions = Settings & { ref?: Dispatch<SetStateAction<Slick>> };

interface ISlide extends SlideType {
  sliderRef: Slick | null;
}

function Slide({ name, color, src, sliderRef }: ISlide) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="text-gray-700 flex items-center py-12"
    >
      <Container
        className="flex lg:flex-row flex-col items-center justify-center relative"
        maxW="max-w-7xl"
      >
        <button
          type="button"
          onClick={sliderRef?.slickNext}
          className="absolute left-0 group"
        >
          <ChevronLeftIcon
            className="w-14 mr-3.5 group-hover:text-gray-500"
            strokeWidth={1}
          />
        </button>

        <Image src={src} alt={name} width={255} height={255} />
        <div className="lg:pl-12 lg:w-8/12 w-10/12 lg:mt-0 mt-8">
          <h3 className="sm:text-[2.9rem] text-4xl sm:leading-[3.35rem] leading-[2.85rem] font-semibold mb-6 lg:text-left text-center">
            {name}
          </h3>

          <div className="flex lg:justify-start justify-center">
            <Button colorScheme="black" size="normal" className="mr-3.5">
              Read More
            </Button>
            <Button
              colorScheme="none"
              size="small"
              className="border border-gray-800 hover:border-black"
            >
              <BookmarkIcon className="w-6 text-gray-800" />
            </Button>
          </div>

          <Link
            href="/library"
            className="font-semibold text-sm lg:block hidden absolute bottom-0 hover:underline"
          >
            View all details
          </Link>
        </div>

        <button
          type="button"
          onClick={sliderRef?.slickPrev}
          className="absolute right-0 group"
        >
          <ChevronRightIcon
            className="w-14 mr-3.5 group-hover:text-gray-500"
            strokeWidth={1}
          />
        </button>
      </Container>
    </div>
  );
}

export default function Slider() {
  const [sliderRef, setSliderRef] = useState<Slick | null>(null);

  const defaultOptions: SlickOptions = {
    ref: setSliderRef,
    dots: false,
    speed: 500,
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
  };

  return (
    <Slick {...defaultOptions} className="relative">
      {slides.map((s: SlideType) => (
        <Slide key={`slick__slide-${s.name}`} {...s} sliderRef={sliderRef} />
      ))}
    </Slick>
  );
}

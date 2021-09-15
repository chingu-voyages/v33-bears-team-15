// /* eslint-disable import/no-unresolved */

import Image from 'next/image';
import Slick, { Settings } from 'react-slick';
import { Dispatch, SetStateAction, useState } from 'react';

import Container from '~/components/ui/container';
import ChevronLeftIcon from '~/assets/icons/chevronLeftIcon';
import ChevronRightIcon from '~/assets/icons/chevronRightIcon';
import slides, { SlideType } from '~data/slides';

import 'slick-carousel/slick/slick.css';
import Button from '../ui/button';

interface ISlide extends SlideType {
  sliderRef: Slick | null;
}

type SlickOptions = Settings & { ref: Dispatch<SetStateAction<Slick>> };

function Slide({ name, color, src, sliderRef }: ISlide) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="text-gray-700 flex items-center py-12"
    >
      <Container className="flex" maxW="max-w-7xl">
        <button type="button" onClick={sliderRef?.slickNext}>
          <ChevronLeftIcon className="w-14 mr-3.5" strokeWidth={1} />
        </button>

        <Image src={src} alt={name} width={258} height={258} />
        <div className="pl-12 w-8/12">
          <h3 className="text-[2.55rem] leading-[3.35rem] font-semibold">{name}</h3>
        </div>

        <button type="button" onClick={sliderRef?.slickPrev}>
          <ChevronRightIcon className="w-14 ml-3.5" strokeWidth={1} />
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
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    fade: true,
  };

  return (
    <Slick {...defaultOptions} className="relative">
      {slides.map((s: SlideType) => (
        <Slide key={`slick__slide-${s.name}`} {...s} sliderRef={sliderRef} />
      ))}
    </Slick>
  );
}

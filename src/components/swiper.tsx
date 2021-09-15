/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-unresolved */

import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Autoplay,
  Navigation,
  SwiperOptions,
  Mousewheel,
  Keyboard,
} from 'swiper';
import { JSXElementConstructor, ReactNode } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';

export type SwiperProps = { [key in keyof SwiperReact]: SwiperReact[key] };

export interface ISwiper extends SwiperProps {
  data?: Array<string | JSXElementConstructor<any>>;
  options?: SwiperOptions;
  children?: ReactNode;
}

export default function Swiper({ children, options, ...rest }: ISwiper) {
  SwiperCore.use([Autoplay, Navigation, Mousewheel, Keyboard]);

  const defaultOptions: SwiperOptions = {
    cssMode: true,
    autoHeight: true,
    mousewheel: true,
    keyboard: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 8500,
      disableOnInteraction: false,
    },
    navigation: true,
    ...options,
  };

  return (
    <SwiperReact {...defaultOptions} {...rest}>
      {children}
    </SwiperReact>
  );
}

Swiper.Slide = SwiperSlide;

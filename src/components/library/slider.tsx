import Image from 'next/image';

import Container from '~/components/ui/container';
import Swiper from '../swiper';
import slides from '~data/slides';

export default function Slider() {
  return (
    <Swiper>
      {slides.map(({ name, color, src }) => (
        <Swiper.Slide
          style={{ backgroundColor: color }}
          className="text-gray-700 flex items-center py-12"
          key={`swiper__slide-${name}`}
        >
          <Container className="flex" maxW="max-w-6xl">
            <Image src={src} alt={name} width={258} height={258} />

            <div className="w-7/12 pl-12">
              <h3 className="text-4xl leading-[3.45rem] font-bold">{name}</h3>
            </div>
          </Container>
        </Swiper.Slide>
      ))}
    </Swiper>
  );
}

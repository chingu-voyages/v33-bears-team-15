import cn from 'classnames';
import { ComponentPropsWithoutRef, useState } from 'react';

import StarIcon from '~/assets/icons/starIcon';

export interface IRating extends ComponentPropsWithoutRef<'div'> {
  initialValue: number;
  allowChange?: boolean;
}

export default function Rating({
  initialValue,
  allowChange = true,
  className,
  ...rest
}: IRating) {
  const [rating, setRating] = useState<number>(initialValue);

  const ratingArray = Array.from(Array(5).keys(), (n) => n + 1);

  const handleChange = (newRating: number) => {
    if (allowChange) {
      setRating(newRating);
    }
  };

  const rootClass = cn('flex', className);

  return (
    <div className={rootClass} {...rest}>
      {ratingArray.map((value) => (
        <StarIcon
          key={value}
          className="w-5 text-yellow-500"
          solid={value <= rating}
          strokeWidth={1}
          onClick={() => handleChange(value)}
        />
      ))}
    </div>
  );
}

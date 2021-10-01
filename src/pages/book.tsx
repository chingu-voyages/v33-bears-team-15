import { useCallback, useState } from 'react';
import Image from 'next/image';
import Layout from '~/components/layout';
import Container from '~/components/ui/container';
import Button from '~/components/ui/button';
import BookmarkIcon from '~/assets/icons/bookmarkIcon';
import Rating from '~/components/rating';

export interface IBook {
  name: string;
  author: string;
  src: string;
  rating: number;
  description: string;
}

export default function Book({ name, author, src, rating, description }: IBook) {
  const [saved, setSaved] = useState<boolean>(false);

  const toggleSaved = useCallback(() => setSaved((prevVal) => !prevVal), []);
  return (
    <Layout
      headerProps={{ withBorder: true, variant: 'solid', sticky: true }}
      customMeta={{ title: 'Book | Dekoo' }}
    >
      <Container>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Image src={src} alt={name} height={198} width={178} layout="fixed" />
            <br />
            <Button
              colorScheme="primary"
              size="normal"
              className="mb-3.5"
              label="Start your free 30 days"
            />
            <br />
            <Button
              colorScheme="none"
              size="small"
              className="mb-3.5"
              label="Read preview"
            />
            <p>
              <button
                type="button"
                onClick={toggleSaved}
                className=""
                title="Save for later"
              >
                <BookmarkIcon solid={saved} className="w-5" strokeWidth={1} />
              </button>
              Save for later
            </p>
            <p>Create a list</p>
            <p>Download to app</p>
            <p>Share</p>
          </div>
          <div className="col-span-2">
            <h1>{name}</h1>
            <p>By {author}</p>
            <p className="flex">
              <Rating initialValue={rating} allowChange={false} className="mr-1" />(
              {rating}/5) Page Numbers - Amount of Time
            </p>
            <h3>Description</h3>
            <p>{description}</p>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

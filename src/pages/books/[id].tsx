import Image from 'next/image';
import { useCallback, useState } from 'react';

import Layout from '~/components/layouts/default';
import Container from '~/components/ui/container';
import Button from '~/components/ui/button';
import BookmarkIcon from '~/assets/icons/bookmarkIcon';
import Rating from '~/components/rating';
import DownloadIcon from '~/assets/icons/downloadIcon';
import ListIcon from '~/assets/icons/listIcon';
import ShareIcon from '~/assets/icons/shareIcon';
import { getAllBooks, getBookById } from '~/services/api';
import { IBook } from '~/types';

export default function Book({
  name,
  author,
  srcCoverPath,
  totalReviews,
  description,
}: IBook) {
  const [saved, setSaved] = useState<boolean>(false);

  const toggleSaved = useCallback(() => setSaved((prevVal) => !prevVal), []);

  return (
    <Layout
      headerProps={{ withBorder: true, variant: 'solid', sticky: true }}
      customMeta={{ title: 'Book | Dekoo' }}
    >
      <Container>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col m-auto">
            <Image
              className="m-auto"
              src={srcCoverPath}
              alt={name}
              height={198}
              width={178}
              layout="fixed"
            />
            <br />
            <Button
              colorScheme="primary"
              size="normal"
              className="m-auto"
              label="Start your free 30 days"
            />
            <br />
            <Button
              colorScheme="none"
              size="normal"
              className="m-auto"
              label="Read preview"
            />
            <p className="flex items-center m-1 ml-5">
              <button
                type="button"
                onClick={toggleSaved}
                className=""
                title="Save for later"
              >
                <BookmarkIcon solid={saved} className="w-5 mr-2" strokeWidth={1} />
              </button>
              <a className="text-lg">Save for later</a>
            </p>
            <p className="flex items-center m-1 ml-5">
              <button type="button">
                <ListIcon className="w-5 mr-2" strokeWidth={1} />
              </button>
              <a className="text-lg">Create a list</a>
            </p>
            <p className="flex items-center m-1 ml-5">
              <button type="button">
                <DownloadIcon className="w-5 mr-2" strokeWidth={1} />
              </button>
              <a className="text-lg">Download to app</a>
            </p>
            <p className="flex items-center m-1 ml-5">
              <button type="button">
                <ShareIcon className="w-5 mr-2" strokeWidth={1} />
              </button>
              <a className="text-lg">Share</a>
            </p>
          </div>
          <div className="col-span-2">
            <h1 className="text-4xl m-2">{name}</h1>
            <p className="">By {author}</p>
            <p className="flex m-1">
              <Rating initialValue={totalReviews} allowChange={false} className="mr-1" />(
              {totalReviews}/5) Page Numbers - Amount of Time
            </p>
            <h3 className="text-3xl m-2">Description</h3>
            <p className="">{description}</p>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  const { data } = getAllBooks.useQuery();

  const paths = data.map((post) => ({
    params: { id: post._id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const { data } = getBookById.useQuery(params.id);

  return {
    props: {
      book: data,
    },
  };
}

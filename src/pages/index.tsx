import Layout from '../components/layout';
import Hero from '~/components/home/hero';
import More from '~/components/home/more';
import Featured from '~/components/home/featured';
import Trending from '~/components/home/trending';
import MostRead from '~/components/home/mostRead';
import BookReview from '~/components/home/bookReview';
import AddBook from '~/components/home/addBook';

export default function Home() {
  return (
    <Layout headerProps={{ variant: 'image' }}>
      <Hero />
      <More />
      <Featured />
      <AddBook />
      <BookReview />
      <Trending />
      <MostRead />
    </Layout>
  );
}

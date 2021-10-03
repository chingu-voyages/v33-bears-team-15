import Layout from '../components/layout';
import Hero from '~/components/home/hero';
import Featured from '~/components/home/featured';
import Trending from '~/components/home/trending';
import MostRead from '~/components/home/mostRead';
import BookReview from '~/components/home/bookReview';
import Book from './book';

export default function Home() {
  return (
    <Layout headerProps={{ variant: 'image' }} customMeta={{ title: 'Home | Dekoo' }}>
      <Hero />
      <Featured />
      <BookReview />
      <Trending />
      <MostRead />
      <Book
        name="Lean Project Management Explained"
        author="Can Akdeniz"
        src="https://imgv2-2-f.scribdassets.com/img/audiobook_square_badge/399285183/original/216x216/ade11cc8e3/1629025589?v=1"
        rating={4}
        description="this is a description of the book."
      />
    </Layout>
  );
}

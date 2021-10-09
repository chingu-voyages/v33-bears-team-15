import Layout from '../components/layouts/default';
import Hero from '~/components/home/hero';
import Featured from '~/components/home/featured';
import Trending from '~/components/home/trending';
import MostRead from '~/components/home/mostRead';
import BookReview from '~/components/home/bookReview';
import useRoleAuthorization from '~/hooks/use-role-authorization';

export default function Home() {
  useRoleAuthorization();

  return (
    <Layout headerProps={{ variant: 'image' }} customMeta={{ title: 'Home | Dekoo' }}>
      <Hero />
      <Featured />
      <BookReview />
      <Trending />
      <MostRead />
    </Layout>
  );
}

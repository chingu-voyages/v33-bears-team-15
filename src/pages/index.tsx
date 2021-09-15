import Layout from '../components/layout';
import Hero from '~/components/home/hero';
import More from '~/components/home/more';
import Featured from '~/components/home/featured';
import Trending from '~/components/home/trending';
import MostRead from '~/components/home/mostRead';

export default function Home() {
  return (
    <Layout headerProps={{ variant: 'image' }}>
      <Hero />
      <More />
      <Featured />
      <Trending />
      <MostRead />
    </Layout>
  );
}

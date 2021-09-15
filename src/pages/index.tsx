import Layout from '../components/layout';
import Hero from '~/components/home/hero';
import More from '~/components/home/more';

export default function Home() {
  return (
    <Layout headerProps={{ variant: 'image' }}>
      <Hero />
      <More />
    </Layout>
  );
}

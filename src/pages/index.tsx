import Layout from '../components/layout';
import Hero from '~/components/home/hero';

export default function Home() {
  return (
    <Layout headerProps={{ variant: 'image' }}>
      <Hero />
    </Layout>
  );
}

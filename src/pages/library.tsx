import Layout from '~/components/layout';
import Slider from '~/components/library/slider';
import Container from '~/components/ui/container';

export default function Library() {
  return (
    <Layout headerProps={{ withBorder: true }}>
      <Slider />
      <Container>
        <h1>Library</h1>
      </Container>
    </Layout>
  );
}

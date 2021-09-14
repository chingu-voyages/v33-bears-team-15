import Layout from '~/components/layout';
import Container from '~/components/ui/container';

export default function Library() {
  return (
    <Layout headerProps={{ withBorder: true }}>
      <Container>
        <h1>Library</h1>
      </Container>
    </Layout>
  );
}

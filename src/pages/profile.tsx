import Layout from '~/components/layouts/default';
import Container from '~/components/ui/container';
import Avatar from '~/components/ui/avatar';

export default function Profile() {
  return (
    <Layout headerProps={{ withBorder: true, variant: 'solid', sticky: true }}>
      <Container>
        <Avatar src="" title="test" className="mt-56" />
      </Container>
    </Layout>
  );
}

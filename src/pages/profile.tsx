import Layout from '~/components/layouts/default';
import Container from '~/components/ui/container';
import Avatar from '~/components/ui/avatar';
import Carousel from '~/components/profile/carousel';

export default function Profile() {
  return (
    <Layout headerProps={{ withBorder: true, variant: 'solid', sticky: true }}>
      <Container>
        <div className="mt-4 flex">
          <Avatar
            src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg"
            title="test"
            className="mt-56"
          />
          <div className="flex-initial ml-24">
            <h1>About me</h1>
            <p>Im cool</p>
          </div>
        </div>
        <Carousel
          title="Reading list"
          data={[
            {
              name: 'hola',
              author: 'me',
              src: 'https://imgv2-2-f.scribdassets.com/img/audiobook_square_badge/399285183/original/216x216/ade11cc8e3/1629025589?v=1',
            },
          ]}
        />
      </Container>
    </Layout>
  );
}

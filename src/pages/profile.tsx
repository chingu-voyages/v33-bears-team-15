import Layout from '~/components/layouts/default';
import Container from '~/components/ui/container';
import Avatar from '~/components/ui/avatar';
import Carousel from '~/components/profile/carousel';
import booksByCategories from '~data/books';

export default function Profile() {
  const mockData = booksByCategories.map((c) => c.data);
  return (
    <Layout headerProps={{ withBorder: true, variant: 'solid', sticky: true }}>
      <Container>
        <div className="mt-4 flex">
          <Avatar
            src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg"
            title="test"
            className="flex-initial"
            width="300px"
          />
          <div className="flex-initial ml-24">
            <h1>About me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{' '}
            </p>
          </div>
        </div>
        <Carousel title="Reading list" data={mockData[0]} />
        <Carousel title="Published books" data={mockData[1]} />
      </Container>
    </Layout>
  );
}

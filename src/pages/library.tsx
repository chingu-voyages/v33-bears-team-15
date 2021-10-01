import Layout from '~/components/layout';
import Carousel from '~/components/library/carousel';
import Slider from '~/components/library/slider';
import Container from '~/components/ui/container';
import booksByCategories from '~data/books';
import Book from './book';

export default function Library() {
  return (
    <Layout
      headerProps={{ withBorder: true, variant: 'solid', sticky: true }}
      customMeta={{ title: 'Library | Dekoo' }}
    >
      <Slider />
      <Container>
        {booksByCategories.map((c) => (
          <Carousel key={c.category} title={c.category} data={c.data} moreHref={c.link} />
        ))}
      </Container>
      <Book
        name="Lean Project Management Explained"
        author="Can Akdeniz"
        src="https://imgv2-2-f.scribdassets.com/img/audiobook_square_badge/399285183/original/216x216/ade11cc8e3/1629025589?v=1"
        rating={4}
        description="this is a test description"
      />
    </Layout>
  );
}

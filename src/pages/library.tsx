import Layout from '~/components/layout';
// import Carousel from '~/components/library/carousel';
import Carousel2 from '~/components/library/carousel2';
import Slider from '~/components/library/slider';
import Container from '~/components/ui/container';
import booksByCategories from '~data/books';

export default function Library() {
  return (
    <Layout
      headerProps={{ withBorder: true, variant: 'solid', sticky: true }}
      customMeta={{ title: 'Library | Dekoo' }}
    >
      <Slider />
      <Container>
        {booksByCategories.map((c) => (
          <Carousel2
            key={c.category}
            title={c.category}
            data={c.data}
            moreHref={c.link}
          />
        ))}
      </Container>
    </Layout>
  );
}

import Layout from '~/components/layouts/default';
import Carousel from '~/components/library/carousel';
import Slider from '~/components/library/slider';
import Container from '~/components/ui/container';
import useRoleAuthorization from '~/hooks/use-role-authorization';
import booksByCategories from '~data/books';

export default function Library() {
  useRoleAuthorization();

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
    </Layout>
  );
}

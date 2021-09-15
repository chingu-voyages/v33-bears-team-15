import Container from '~/components/ui/container';
import useTheme from '~/hooks/use-theme';
import EllipsisIcon from '~/assets/icons/ellipsisIcon';

export default function More() {
  const { isDark } = useTheme();
  const fill = isDark ? 'white' : 'black';
  return (
    <section className="-my-14">
      <Container className="flex justify-center">
        <EllipsisIcon className="w-10" fill={fill} />
      </Container>
    </section>
  );
}

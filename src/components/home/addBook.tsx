import Link from '../common/link';
import Container from '~/components/ui/container';
import useTheme from '~/hooks/use-theme';
import UploadIcon from '~/assets/icons/uploadIcon';

export default function AddBook() {
  const { isDark } = useTheme();
  const fill = isDark ? 'white' : 'black';
  return (
    <section className="mt-28">
      <h4 className="text-5xl w-full py-7 text-center font-bold">
        Share your with others...
      </h4>

      <Container className="flex justify-center items-center">
        <UploadIcon className="w-10" fill={fill} />
        <div className="flex justify-center flex-wrap">
          <Link
            href="/"
            className="mt-5 bg-gray-100 text-gray-800 uppercase hover:border-gray-300 hover:shadow hover:opacity-90 hover:text-gray-900 border border-gray-200 py-3.5 px-12 flex justify-center items-center rounded-sm font-bold tracking-wide"
          >
            Add a Book
          </Link>
        </div>
      </Container>
    </section>
  );
}

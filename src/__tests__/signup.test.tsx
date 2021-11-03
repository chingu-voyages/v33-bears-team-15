import { render, screen } from './test-utils';
import Signup from '~/pages/signup';

describe('<Signup /> Page', () => {
  beforeEach(() => render(<Signup />));

  describe('Rendering', () => {
    it('should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });

    it('should render the page title', () => {
      const title = screen.getByText(/join the most epic platform/i);

      expect(title).toBeInTheDocument();
    });
  });
});

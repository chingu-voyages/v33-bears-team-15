import { render, screen } from './test-utils';
import Home from '../pages/index';

describe('Home', () => {
  beforeEach(() => render(<Home />));

  it('should match the snapshot', () => {
    expect(screen).toMatchSnapshot();
  });

  it('renders a heading', () => {
    const heading = screen.getByRole('heading', {
      name: /endless entertainment and knowledge/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

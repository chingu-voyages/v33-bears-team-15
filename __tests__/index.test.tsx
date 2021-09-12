// __tests__/index.test.jsx
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    window.addEventListener('load', function () {
      const heading = screen.getByRole('heading', {
        name: /welcome to next\.js!/i,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});

// __tests__/snapshot.js
import renderer from 'react-test-renderer';
import Index from '../pages/index';

it('renders homepage unchanged', () => {
  const tree = renderer.create(<Index />).toJSON();
  expect(tree).toMatchSnapshot();
});

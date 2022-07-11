import App from '../App';
import Counter from '../components/Counter';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('../components/Counter', () => {
  Counter: jest.fn(() => {
    <div data-testid='Counter' />;
  });
});

it('should render component Counter on App', () => {
  render(<App />);
  expect(screen.queryByTestId('Counter')).toBeInTheDocument();
});

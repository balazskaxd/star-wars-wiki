import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Header from './Header';

const title = 'Test title';
const backButtonTitle = 'Back to main menu';

test('shuold render given title', () => {
  const { getByText } = render(<Header title={title} />);
  const titleElement = getByText(title);
  expect(titleElement).toBeInTheDocument();
});

test('shuold not render the back button by default', () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <Header title={title} />
    </Router>,
  );
  expect(screen.queryByText(new RegExp(backButtonTitle, 'i'))).not.toBeInTheDocument();
});

test('shuold render the button button', () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <Header title={title} withBackButton />
    </Router>,
  );
  expect(screen.getByText(new RegExp(backButtonTitle, 'i'))).toBeInTheDocument();
});

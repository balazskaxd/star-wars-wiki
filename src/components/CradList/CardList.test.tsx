import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import CardList from './CardList';

const mockItems = [
  { id: 1, name: 'Test 1' },
  { id: 2, name: 'Test 2' },
  { id: 3, name: 'Test 3' },
]

test('should render given items', () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <CardList items={mockItems} path="" />
    </Router>
  );
  const cardListContainer = screen.getByTestId('CardList:container');
  expect(cardListContainer.children.length).toBe(mockItems.length);
});

test('should not render any item', () => {
  render(<CardList items={[]} path="" />);
  const cardListContainer = screen.getByTestId('CardList:container');
  expect(cardListContainer.children.length).toBe(0);
});

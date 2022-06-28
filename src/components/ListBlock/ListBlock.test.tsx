import React from 'react';
import { render, screen } from '@testing-library/react';
import ListBlock from './ListBlock';

const mockTitle = 'Mock Title';
const mockListItems = ['item1', 'item2'];

test('shuold render given items', () => {
  render(
    <ListBlock title={mockTitle} listItems={undefined} />
  );
  const listBlockTitle = screen.getByTestId('ListBlock:title');
  expect(listBlockTitle.textContent).toBe(mockTitle);
});

test('shuold render Spinner without items', () => {
  render(
    <ListBlock title={mockTitle} listItems={undefined} />
  );
  const listBlockSpinner = screen.getByTestId('Spinner:container');
  expect(listBlockSpinner).toBeInTheDocument();
});

test('shuold render list items', () => {
  render(
    <ListBlock title={mockTitle} listItems={mockListItems} />
  );
  const listBlockList = screen.getByTestId('ListBlock:list');
  expect(listBlockList).toBeInTheDocument();
  expect(listBlockList.children.length).toBe(mockListItems.length);
});

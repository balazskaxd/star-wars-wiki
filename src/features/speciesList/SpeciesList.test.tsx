import React from 'react';
import { render, screen } from '@testing-library/react';
import SpeciesList from './SpeciesList';
import { createMemoryHistory } from 'history';
import { useSpeciesList } from './useSpeciesList';
import { Router } from 'react-router-dom';
import { mockSpeciesProfile } from '__test__/mockData';

jest.mock('./useSpeciesList');
const mockuseSpeciesList = useSpeciesList as jest.MockedFunction<typeof useSpeciesList>
const defaultHookVales = {
  isLoading: false,
  isFetching: false,
  speciesList: {
    count: 37,
    next: 'next',
    previous: null,
    results: [mockSpeciesProfile],
  },
  page: 1,
  setPage: () => {},
};

test('shuold render SpeciesList component', () => {
  mockuseSpeciesList.mockReturnValue({
    ...defaultHookVales,
    isFetching: true,
  });
  render(<SpeciesList />);
  const SpeciesListContiner = screen.getByTestId('SpeciesList:container');
  expect(SpeciesListContiner).toBeInTheDocument();
});

test('shuold render Spinner while fetching species data', () => {
  mockuseSpeciesList.mockReturnValue({
    ...defaultHookVales,
    isFetching: true,
  });
  render(<SpeciesList />);
  const SpinnerContainer = screen.getByTestId('Spinner:container');
  expect(SpinnerContainer).toBeInTheDocument();
});

test('shuold render CardList component', () => {
  mockuseSpeciesList.mockReturnValue(defaultHookVales);
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <SpeciesList />
    </Router>
  );
  const CardListContainer = screen.getByTestId('CardList:container');
  expect(CardListContainer).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import SpeciesProfile from './SpeciesProfile';
import { createMemoryHistory } from 'history';
import { useSpeciesProfile } from './useSpeciesProfile';
import { Router } from 'react-router-dom';
import { mockPeople, mockSpeciesProfile } from '__test__/mockData';

jest.mock('./useSpeciesProfile');
const mockuseSpeciesProfile = useSpeciesProfile as jest.MockedFunction<typeof useSpeciesProfile>
const defaultHookVales = {
  isLoading: false,
  isFetching: false,
  speciesProfile: mockSpeciesProfile,
  peopleList: undefined,
};

test('shuold render SpeciesProfile component', () => {
  mockuseSpeciesProfile.mockReturnValue(defaultHookVales);
  render(<SpeciesProfile />);
  const SpeciesProfileContiner = screen.getByTestId('SpeciesProfile:container');
  expect(SpeciesProfileContiner).toBeInTheDocument();
});

test('shuold render Spinner while fetching species data', () => {
  mockuseSpeciesProfile.mockReturnValue({
    ...defaultHookVales,
    isFetching: true,
  });
  render(<SpeciesProfile />);
  const SpinnerContainer = screen.getByTestId('Spinner:container');
  expect(SpinnerContainer).toBeInTheDocument();
});

test('shuold render CardList component', () => {
  mockuseSpeciesProfile.mockReturnValue({
    ...defaultHookVales,
    peopleList: [mockPeople],
  });
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <SpeciesProfile />
    </Router>
  );
  const SpeciesProfileTitle = screen.getByTestId('SpeciesProfile:title');
  const CardListContainer = screen.getByTestId('CardList:container');
  expect(SpeciesProfileTitle.textContent).toBe(`${defaultHookVales.speciesProfile.name} characters`);
  expect(CardListContainer).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterProfile from './CharacterProfile';

import { useCharacterProfile } from './useCharacterProfile';
import { PeopleDTO } from 'app/types';
import { mockFilm, mockPeople, mockSpeciesProfile } from '__test__/mockData';

jest.mock('./useCharacterProfile');
const mockuseCharacterProfile = useCharacterProfile as jest.MockedFunction<typeof useCharacterProfile>
const defaultHookVales = {
  isLoading: false,
  isFetching: false,
  characterProfile: mockPeople,
  filmList: undefined,
  speciesList: undefined,
};

test('should render CharacterProfile component', () => {
  mockuseCharacterProfile.mockReturnValue(defaultHookVales);
  render(<CharacterProfile />);
  const CharacterProfileContiner = screen.getByTestId('CharacterProfile:container');
  expect(CharacterProfileContiner).toBeInTheDocument();
});

test('should render Spinner while fetching profile data', () => {
  mockuseCharacterProfile.mockReturnValue({
    ...defaultHookVales,
    isFetching: true,
  });
  render(<CharacterProfile />);
  const SpinnerContainer = screen.getByTestId('Spinner:container');
  expect(SpinnerContainer).toBeInTheDocument();
});

test('should render name of the character', () => {
  mockuseCharacterProfile.mockReturnValue(defaultHookVales);
  render(<CharacterProfile />);
  const CharacterProfileTitle = screen.getByTestId('CharacterProfile:title');
  expect(CharacterProfileTitle).toBeInTheDocument();
  expect(CharacterProfileTitle.textContent).toBe(defaultHookVales.characterProfile.name);
});

test('should render description list of the character', () => {
  mockuseCharacterProfile.mockReturnValue(defaultHookVales);
  render(<CharacterProfile />);
  const CharacterProfileDescriptionList = screen.getByTestId('CharacterProfile:description-list');
  expect(CharacterProfileDescriptionList).toBeInTheDocument();
});

test('should render list blocks (without content)', () => {
  mockuseCharacterProfile.mockReturnValue({
    ...defaultHookVales,
    isFetching: false,
  });
  render(<CharacterProfile />);
  const CharacterProfileListBlocks = screen.getAllByTestId('ListBlock:container');
  const SpinnerContainers = screen.getAllByTestId('Spinner:container');
  expect(CharacterProfileListBlocks.length).toBe(2);
  expect(SpinnerContainers.length).toBe(2);
});

test('should render list blocks (with content)', () => {
  mockuseCharacterProfile.mockReturnValue({
    ...defaultHookVales,
    filmList: [mockFilm],
    speciesList: [mockSpeciesProfile],
  });
  render(<CharacterProfile />);
  const CharacterProfileListBlocks = screen.getAllByTestId('ListBlock:container');
  expect(CharacterProfileListBlocks.length).toBe(2);
});

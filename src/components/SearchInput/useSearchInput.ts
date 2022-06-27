import {
  useRef,
  useState,
  useEffect,
} from 'react';
import { debounce } from 'lodash';
import { PeopleDTO } from 'app/types';
import { getItemId } from 'app/utils';
import { baseUrl } from 'app/config';

export type DropdownItem = {
  label: string;
  id: string;
};

export const useSearchInput = () => {
  const [query, setQuery] = useState('');
  const [people, setPeople] = useState<DropdownItem[] | undefined>(undefined);

  const search = async (queryString: string) => {
    const response = await fetch(`${baseUrl}/people/?search=${queryString}`);
    const body = await response.json();

    if (body.results && body.results.length > 0) {
      setPeople(body.results.map((result: PeopleDTO) => ({
        label: result.name,
        id: getItemId(result.url, 'people'),
      })));
    } else {
      setPeople(undefined);
    }
  };

  const debouncedSearch = useRef(
    debounce((queryString) => {
      search(queryString);
    }, 1000),
  ).current;

  useEffect(() => (
    () => {
      debouncedSearch.cancel();
    }
  ), [debouncedSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPeople(undefined);
    debouncedSearch(e.target.value);
  };

  return {
    handleChange,
    query,
    setQuery,
    people,
  };
};

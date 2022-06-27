import { Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { useSearchInput } from './useSearchInput';

function SearchInput() {
  const {
    query, setQuery,
    people,
    handleChange,
  } = useSearchInput();
  const navigate = useNavigate();

  return (
    <div className="w-72 m-6 mx-auto">
      <Combobox
        value={undefined}
        onChange={(id) => {
          navigate(`/characters/${id}`);
        }}
      >
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900"
              displayValue={() => ''}
              onChange={handleChange}
              placeholder="Character search"
            />
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg"
            >
              {
                !people
                && (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Searching...
                  </div>
                )
              }
              {
                people && query !== ''
                && (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                )
              }
              {
                people && people.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) => (
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'}`
                    )}
                    value={person.id}
                  >
                    {() => (
                      <span className="block truncate 'font-normal">{person.label}</span>
                    )}
                  </Combobox.Option>
                ))
              }
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchInput;

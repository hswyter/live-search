import React, { ChangeEvent, FunctionComponent, useCallback, useState } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import SearchInputField from '../../components/ui/atoms/input/SearchInputField';
import { UserSearchProvider } from '../../components/context/UserSearchContext';
import UserSearchResult from './UserSearchResult';
import { debounce } from 'lodash';

const UserSearchPage: FunctionComponent = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleDebounceFn = (value: string) => {
    setSearchTerm(value);
  }

  const debounceFn = useCallback(debounce(handleDebounceFn, 200), []);

  const handleSearchInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.currentTarget.value);
    debounceFn(e.currentTarget.value);
  }, []);

  return (
    <UserSearchProvider searchTerm={searchTerm}>
      <PageLayout>
        <SearchInputField onChange={handleSearchInputChange} value={searchInputValue} />
        <UserSearchResult />
      </PageLayout>
    </UserSearchProvider>
  );
}

export default UserSearchPage;
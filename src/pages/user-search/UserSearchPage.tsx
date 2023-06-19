import React, { ChangeEvent, FunctionComponent, useCallback, useState } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import SearchInputField from '../../components/ui/atoms/input/SearchInputField';
import { UserSearchProvider } from '../../components/context/UserSearchContext';
import UserSearchResult from './UserSearchResult';

const UserSearchPage: FunctionComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  }, []);

  return (
    <UserSearchProvider searchTerm={searchTerm}>
      <PageLayout>
        <SearchInputField onChange={handleSearchInputChange} value={searchTerm} />
        <UserSearchResult />
      </PageLayout>
    </UserSearchProvider>
  );
}

export default UserSearchPage;
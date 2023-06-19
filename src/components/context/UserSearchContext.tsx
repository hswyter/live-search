import React, { Dispatch, FunctionComponent, PropsWithChildren, SetStateAction, createContext, useEffect, useState } from 'react';
import { User } from '../../interfaces/User';
import searchForUsers from '../../api/searchForUsers';

interface SearchContextProps {
  users: Array<User>;
  setUsers: Dispatch<SetStateAction<Array<User>>>;
}

const UserSearchContext = createContext<SearchContextProps>({
  users: [],
  setUsers: () => { }
});

type UserSearchProviderProps = PropsWithChildren & {
  searchTerm: string;
}

export const UserSearchProvider: FunctionComponent<UserSearchProviderProps> = ({ children, searchTerm }: UserSearchProviderProps) => {
  const [users, setUsers] = useState<Array<User>>([]);

  const fetchUsers = async () => {
    const users = await searchForUsers(searchTerm);
    setUsers(users);
  }

  useEffect(() => {
    fetchUsers();
  }, [searchTerm])

  return (
    <UserSearchContext.Provider value={{ users, setUsers }}>
      {children}
    </UserSearchContext.Provider>
  );
}

export default UserSearchContext;
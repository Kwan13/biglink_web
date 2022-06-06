import {
  createContext,
  ReactElement,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { UserLoginInterface } from '../interfaces/UserInterface';
import getLoggedUser, {
  removeLoggedUser,
  setAndChangeLoggedUser,
} from '../utils/LoggedUser';

type UserAuthContextProviderProps = {
  children: ReactNode;
};

interface AuthContextProviderType {
  user: UserLoginInterface | undefined;
  changeLoggedUser: (user: UserLoginInterface | undefined) => void;
  removeLoggedUser: () => void;
}

export const UserAuthContext = createContext({} as AuthContextProviderType);

export function UserAuthContextProvider(
  props: UserAuthContextProviderProps,
): ReactElement {
  const [user, setUser] = useState<UserLoginInterface | undefined>();

  function removeLoggedUserContext() {
    removeLoggedUser();
    setUser(undefined);
  }

  useEffect(() => {
    const user = getLoggedUser();

    setUser(user);
  }, []);

  function changeLoggedUserContext(
    userForSave: UserLoginInterface | undefined,
  ) {
    if (userForSave) {
      setAndChangeLoggedUser(userForSave);
      setUser(userForSave);
      return;
    }

    setUser(undefined);
  }

  return (
    <UserAuthContext.Provider
      value={{
        user,
        changeLoggedUser: changeLoggedUserContext,
        removeLoggedUser: removeLoggedUserContext,
      }}
    >
      {props.children}
    </UserAuthContext.Provider>
  );
}

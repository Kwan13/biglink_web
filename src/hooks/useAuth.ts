/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContext } from 'react';
import { UserAuthContext } from '../context/UserAuthContext';

export function useAuth() {
  const value = useContext(UserAuthContext);

  return value;
}

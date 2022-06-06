/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContext } from 'react';
import { ForgotPasswordContext } from '../context/ForgotPasswordContext';

export function useForgotPassword() {
  const value = useContext(ForgotPasswordContext);

  return value;
}

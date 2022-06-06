import { createContext, ReactElement, ReactNode, useState } from 'react';
import ForgotPasswordInterface from '../interfaces/ForgotPasswordInterface';

type ForgotPasswordContextProviderProps = {
  children: ReactNode;
};

interface ForgotPasswordProviderType {
  forgotPasswordObj: ForgotPasswordInterface;
  changeForgotPasswordObj: (forgotPasswordObj: ForgotPasswordInterface) => void;
}

export const ForgotPasswordContext = createContext(
  {} as ForgotPasswordProviderType,
);

export function ForgotPasswordContextProvider(
  props: ForgotPasswordContextProviderProps,
): ReactElement {
  const [forgotPasswordObjState, setForgotPasswordState] =
    useState<ForgotPasswordInterface>({
      code: '',
      email: '',
      passwordChanged: false,
    });

  function changeForgotPasswordContext(
    forgotPasswordObjToSave: ForgotPasswordInterface,
  ) {
    setForgotPasswordState(forgotPasswordObjToSave);
  }

  return (
    <ForgotPasswordContext.Provider
      value={{
        forgotPasswordObj: forgotPasswordObjState,
        changeForgotPasswordObj: changeForgotPasswordContext,
      }}
    >
      {props.children}
    </ForgotPasswordContext.Provider>
  );
}

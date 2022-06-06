import { ReactElement, ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonElement } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function SubmitButton({ children, ...rest }: ButtonProps): ReactElement {
  return (
    <ButtonElement type="submit" {...rest}>
      {children}
    </ButtonElement>
  );
}

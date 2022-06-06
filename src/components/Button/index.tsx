import { ButtonHTMLAttributes, ReactElement } from 'react';
import { IconProps } from 'react-feather';
import PlaceholderLoading from 'react-placeholder-loading';
import { Container } from './styles';

interface Params extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: IconProps;
  isLoading: boolean;
}

export default function Button({
  text,
  icon,
  isLoading,
  ...rest
}: Params): ReactElement {
  return (
    <Container>
      <button className="buttonSubmit" type="button" {...rest}>
        {isLoading ? (
          <PlaceholderLoading
            colorStart="#a7d9f6"
            colorEnd="#f6f7fb"
            shape="rect"
            width="100%"
            height="100%"
          />
        ) : (
          <>
            {text} {icon}
          </>
        )}
      </button>
    </Container>
  );
}

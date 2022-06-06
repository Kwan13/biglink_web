import { ReactElement } from 'react';

import { MobileMenu } from './MobileMenu';
import { Input } from '../Form/Input';

import { Container } from './styles';

import { useAuth } from '../../hooks/useAuth';
import { validateRoles, Roles } from '../../utils/hasRoles';

interface HeaderProps {
  title?: string;
  subTitle: string;
  search?: boolean;
  buttonTitle: string;
  handleButtonClick: () => void;
}

export function Header({
  title,
  subTitle,
  search = false,
  buttonTitle,
  handleButtonClick,
}: HeaderProps): ReactElement {
  const { user } = useAuth();

  const hasWriteRole = validateRoles(user, Roles.WRITE);

  return (
    <Container>
      <div className="TitleBox">
        <p>{title}</p>
        <h1>{subTitle}</h1>
      </div>
      {search && (
        <div className="searchBar">
          <Input name="search" height="56px" borderRadius="18px" />
        </div>
      )}
      <button
        className={hasWriteRole ? 'headerButton' : 'headerButtonDisabled'}
        type="button"
        disabled={!hasWriteRole}
        onClick={handleButtonClick}
      >
        {buttonTitle}
      </button>
      <MobileMenu />
    </Container>
  );
}

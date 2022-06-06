import { FormEvent, ReactElement, useState } from 'react';
import { FiHome, FiUser, FiPower } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { Container } from './styles';

export enum SidebarOptions {
  PROJECTS,
  PROFILE,
}

export function Sidebar(): ReactElement {
  const { removeLoggedUser } = useAuth();
  const history = useHistory();
  const [selected, setSelected] = useState<SidebarOptions>(
    SidebarOptions.PROJECTS,
  );

  function logout(e: FormEvent) {
    e.preventDefault();
    removeLoggedUser();
    history.push('/');
  }

  return (
    <Container>
      <div>
        <Link
          to="/projects"
          onClick={() => {
            setSelected(SidebarOptions.PROJECTS);
          }}
        >
          <FiHome
            size={30}
            color={selected === SidebarOptions.PROJECTS ? '#6CC8FC' : '#000000'}
          />
        </Link>
        <Link
          to="/projects"
          onClick={() => {
            setSelected(SidebarOptions.PROFILE);
          }}
        >
          <FiUser
            size={30}
            color={selected === SidebarOptions.PROFILE ? '#6CC8FC' : '#000000'}
          />
        </Link>
      </div>
      <button type="button" onClick={logout}>
        <FiPower size={30} color="#000000" />
      </button>
    </Container>
  );
}

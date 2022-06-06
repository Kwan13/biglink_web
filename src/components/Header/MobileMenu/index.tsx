import { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiSearch, FiHome } from 'react-icons/fi';

import { Input } from '../../Form/Input';

import { Button, Content } from './styles';

export function MobileMenu(): ReactElement {
  const [showMenu, setShowMenu] = useState(false);

  function handleToggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <Button type="button" onClick={handleToggleMenu}>
        {showMenu ? (
          <FiX size={30} color="#6CC8FC" />
        ) : (
          <FiMenu size={30} color="#6CC8FC" />
        )}
      </Button>

      <Content className={showMenu ? 'showMenu' : ''}>
        <div className="searchBox">
          <Input
            name="search"
            placeholder="Pesquisar projeto"
            height="56px"
            borderRadius="18px"
            icon={FiSearch}
          />
        </div>

        <h3>Menu</h3>

        <Link to="/">
          <FiHome size={30} />
          Home
        </Link>
      </Content>
    </>
  );
}

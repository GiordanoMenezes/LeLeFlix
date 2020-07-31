import React from 'react';
import Logo from '../../assets/img/leleflix.png';

import {MenuContainer,LogoImage} from './styled';

import { Link } from 'react-router-dom';
import { Button } from '../Button';

function Menu() {
  return (
    <MenuContainer>
      <Link to="/">
        <LogoImage className="Logo" src={Logo} alt="Logo"/>
      </Link>
      <Button as={Link} to="/cadastros/video">
         Novo Vídeo
      </Button>
    </MenuContainer>
  )
}

export default Menu;
import React from 'react';
import { FooterBase, Titlefooter, Descfooter } from './styles';

function Footer() {
  return (
    <FooterBase>
        <Titlefooter>Giordano WEB</Titlefooter>
      <Descfooter>
        Criado por:
        {' '}
        <a href="https://www.alura.com.br/">
          Giordano Menezes - Freelancer e Desenvolvimento Web
        </a>
      </Descfooter>
    </FooterBase>
  );
}

export default Footer;

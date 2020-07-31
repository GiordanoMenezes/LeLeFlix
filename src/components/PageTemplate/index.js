import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';

import styled from 'styled-components';

const Main = styled.div`
   padding-top:94px;
   padding-bottom:90px;
   padding-left:5%;
   padding-right: 5%;
   background-color: var(--black);
   color: var(--white);
   flex:1;
`;

function PageTemplate(props) {
  return (
    <>
      <Menu />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </>
  );
}

export default PageTemplate;
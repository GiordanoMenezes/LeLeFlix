import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: var(--white);
  text-align: center;
  position:fixed;
  left:0;
  right:0;
  bottom:0;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const Titlefooter = styled.p`
    color:#db1927;
    font-size:24px;
    margin: 10px 0;
`;

export const Descfooter = styled.p`
    color: var(--white);
    font-size:14px;
    margin: 5px 0;
`;

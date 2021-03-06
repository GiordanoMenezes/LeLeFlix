import styled from "styled-components";


export const Button = styled.button`
  color: var(--white);
  background-color: var(--black);
  border: 1px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
}

  @media(max-width: 800px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    color: var(--white);
    background: var(--primary);
    border: 0;
    border-radius: 0;
    text-align: center;

    &:hover,
    &:focus {
      opacity: 1;
}
  }


`;
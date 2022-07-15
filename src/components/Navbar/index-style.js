import styled, { css } from 'styled-components';

export const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: linear-gradient(180deg, #cdcdcc 0%, #cdcdcc 100%);

  z-index: 100;

  @media (max-width: 600px) {
    #resume {
      position: absolute;
      right: 12%;
      top: 8px;
    }
  }
`;

export const Logo = styled.h1`
  margin: 0.5rem;
  font-size: 1.5rem;
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  font-size: 1.5rem;
  padding-inline: 1rem;

  @media (max-width: 600px) {
    display: flex;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;

  @media (max-width: 600px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    padding-bottom: ${({ isOpen }) => (isOpen ? '.5rem' : '0')};
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
  }
`;

export const MenuLinks = styled.a`
  margin-inline: 0.5rem;
  padding: 0.3rem;
  cursor: pointer;
  text-decoration: none;
  color: var(--clr-text1);
  transition: all 0.2s ease-in;
  border: 1px solid var(--clr-background1);

  &:hover {
    color: var(--clr-text2);
    background: var(--clr-fill1);
    border: 1px solid var(--clr-fill1);
    border-radius: var(--border-radius);
  }

  ${(props) =>
    props.resume &&
    css`
      border: 1px solid var(--clr-text1);
      border-radius: var(--border-radius);
    `}
`;

import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

export const AnimatedNav = styled(animated.nav)`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: var(--clr-blue);
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
  text-shadow: 3px 3px var(--clr-secondary1);
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
  color: var(--clr-dark-blue);
  transition: all 0.2s ease-in;

  &:hover {
    color: var(--clr-blue);
    background: var(--clr-secondary1);
    border-radius: var(--border-radius);
  }

  ${(props) =>
    props.resume &&
    css`
      border: 1px solid var(--clr-dark-blue);
      border-radius: var(--border-radius);
    `}
`;

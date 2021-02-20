import React, { useState } from "react";
import styled from "styled-components";
import Switch from '../../components/SwitchThemeMode';
import { IRootState } from "../../store/combineReducer";
import { useSelector } from "react-redux";

interface INav {
  grey?: boolean;
  blue?: boolean;
  white?: boolean
}

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.nav.textColor};
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #7b7fda;
  }
`;

const Nav = styled.div<INav>`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${({ theme, grey, blue, white }) => grey ?
    theme.nav.grey.backgroundColor : blue ? theme.nav.blue.backgroundColor :
      white ? theme.nav.white.backgroundColor : '#2F4F4F'
  };
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.nav.textColor};
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => isOpen ? "300px" : "0"};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;


const Navbar = ({ grey, blue, white }: INav) => {
  const { datas, meta } = useSelector(
    (rootState: IRootState) => rootState.criminals
  );

  const { length } = datas;
  const { loading } = meta;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav  {...{ grey, blue, white }}>
      <Logo href="https://www.hoxhunt.com/">
        Hox<span>hunt</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/">Criminals {loading ? 'loading...' : length}</MenuLink>
        <Switch />
      </Menu>
    </Nav>
  );
};

export default Navbar;


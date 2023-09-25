import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav`
 top: 0; 
  width: 100%;
  background: #333;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 12;
 
`;

export const NavLink = styled(Link)`
display: flex;
align-items: center;

  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #C3085C;
  }

  &.active {
    color: #63d471;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  padding-left:100px;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`

  display: flex;
  align-items: center;

 justify-content:flex-end;
 @media screen and (max-width: 768px) {
  display: none;
}


  }
`;

export const NavBtnLink = styled(Link)`

  border-radius: 20px;
  background: #C3085C;
  padding: 10px 40px;
  margin:2px;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
  text-decoration: none;
  

  &:hover {
    background: #fff;
    color: #63d471;
  }

  &:active {
    transform: translateY(2px);
  }
`;






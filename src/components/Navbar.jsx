import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Modal Y</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <button onClick={() => setBurgerOpen(true)}>Menu</button>
      </RightMenu>
      {burgerOpen && (
        <BurgerNav open={burgerOpen}>
          <CloseWrapper>
            <svg
              onClick={() => setBurgerOpen(false)}
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                stroke="var(--tds-icon--fill, #171a20)"
                stroke-width="1.5"
                stroke-linecap="round"
              >
                <line x1="10" y1="10" x2="20" y2="20"></line>
                <line x1="20" y1="10" x2="10" y2="20"></line>
              </g>
            </svg>
          </CloseWrapper>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-in</a>
          </li>
          <li>
            <a href="#">Cybertruck</a>
          </li>
          <li>
            <a href="#">Roadster</a>
          </li>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
        </BurgerNav>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  margin-right: 10px;
  a,
  button {
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    background: none;
    border: none;
  }
  button {
    display: none;
    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    button {
      display: unset;
    }
  }
  @media (max-width: 480px) {
    a {
      display: none;
    }
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  li {
    padding: 15px 0;
    border-bottom: 1 solid rgba(0, 0, 0, 0.8);
    a {
      font-weight: 400;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 15px;
  svg {
    width: 30px;
    float: right;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default Navbar;

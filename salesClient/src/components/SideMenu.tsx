import styled from "styled-components";
import { Colors } from "../styles/defaultProps";
import { slide as Menu } from "react-burger-menu";
import { ComponentClass, FunctionComponent, useState } from "react";

export const HeaderBox = styled.header`
  background-color: ${Colors.regularColor};
  padding: 1rem 2rem;
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const HamburguerMenuIcon = styled.div`
  width: 2rem;
  height: 2rem;
`;

export const MenuBox = styled.div`
  background-color: ${Colors.secondBackround};
  height: 100%;
`;

export const MenuItens = styled.div`
  background-color: ${Colors.secondBackround};
  height: 100%;
`;

export default function SideMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleStateChange = (state: {
    isOpen: boolean | ((prevState: boolean) => boolean);
  }) => {
    setMenuOpen(state.isOpen);
  };

  return (
    <div>
      <Menu
        disableOverlayClick={false}
        isOpen={menuOpen}
        onStateChange={handleStateChange}
      >
        <MenuBox>
          <a onClick={closeMenu} href="/home">
            Home
          </a>
          <a onClick={closeMenu} href="/about">
            About
          </a>
          <a onClick={closeMenu} href="/services">
            Services
          </a>
        </MenuBox>
      </Menu>
    </div>
  );
}

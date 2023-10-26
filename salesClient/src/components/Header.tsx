import styled from "styled-components";
import { Colors } from "../styles/defaultProps";
import SideMenu from "./SideMenu";
import { IoMdMenu } from "react-icons/io";

export const HeaderBox = styled.header`
  background-color: ${Colors.regularColor};
  padding: 1rem 2rem;
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 400;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const HamburguerMenuIcon = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const LogoMenuItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const HeaderPageTitle = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  padding: 0px;
`;

export const LogoMenuArea = styled.div`
  display: flex;
  gap: 2rem;
`;
export const MenuBox = styled.div`
  background-color: ${Colors.secondBackround};
  height: 100%;
`;

export const MenuItens = styled.div`
  background-color: ${Colors.secondBackround};
  height: 100%;
`;

export default function Header() {
  return (
    <>
      <HeaderBox>
        <LogoMenuArea>
          {" "}
          <HamburguerMenuIcon>
            <IoMdMenu />
          </HamburguerMenuIcon>
          <LogoMenuItem>Logo</LogoMenuItem>
        </LogoMenuArea>
        <div>
          {" "}
          <HeaderPageTitle>Page name here</HeaderPageTitle>
        </div>

        <div></div>
      </HeaderBox>
      {/* <SideMenu /> */}
    </>
  );
}

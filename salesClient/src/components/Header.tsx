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

export default function Header() {
  return (
    <>
      <HeaderBox>
        <HamburguerMenuIcon>
          <IoMdMenu />
        </HamburguerMenuIcon>
        <div>Logo</div> Page name here
      </HeaderBox>
      {/* <SideMenu /> */}
    </>
  );
}

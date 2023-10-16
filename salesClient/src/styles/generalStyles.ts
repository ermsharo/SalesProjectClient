import styled from "styled-components";
import { Fonts, Colors, BreakPoints } from "./defaultProps";

export const Box = styled.div`
  padding: 1.5rem;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: 1rem;

  gap: 1rem;
  white-space: wrap;

  text-overflow: ellipsis;
  height: 100%;
  background-color: ${Colors.secondBackround};
`;

export const Input = styled.input`
  font-family: ${Fonts.primaryFont}

  font-size: 1.2rem;
  border-radius: 0.2rem;
  border: 0;
  box-sizing: border-box;
  width: calc(100%);
  margin-top: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${Colors.thirthBackground};
  color: ${Colors.primaryfontColor};
  &::placeholder {
    color: ${Colors.primaryfontColor};
    font-family: ${Fonts.primaryFont}
  }
  &:focus{
    outline: 0.2rem solid  ${Colors.firstBackground};
    outline-style: dashed;
  }
`;

export const RegularInput = styled.input`
  font-family: ${Fonts.primaryFont}
  color: #333;
  font-size: 1rem;
  border-radius: 0.2rem;
  border: 0;
  box-sizing: border-box;

  width: calc(100%);

  margin-top: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 16px;
  background-color: ${Colors.thirthBackground};
  color: ${Colors.primaryfontColor};
  &::placeholder {
    color: ${Colors.hooverColor};
    font-family: ${Fonts.primaryFont}
  }
  &:focus{
    outline: 0.2rem solid  ${Colors.hooverColor};
    outline-style: dashed;
  }
`;

export const Label = styled.label`
  font-family: ${Fonts.primaryFont};
  font-size: 1.2rem;
  line-height: 1.2rem;
`;

export const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  border-radius: 1rem;
  padding: 0.5rem;
  background-color: darkblue;
  color: white;
  width: calc(100%);
  height: 3rem;
  margin: auto;
  background-color: ${Colors.regularColor};
  margin-bottom: 2rem;
  &:hover {
    background-color: ${Colors.hooverColor};
  }
`;

export const Board = styled.div`
  margin: auto;
  padding: 2rem 0rem;
  height: 80vh;
  width: 70vw;
  margin: auto;

  @media (max-width: ${BreakPoints.bpExtraLargeDevices}) {
    width: 70vw;
    margin: auto;
  }
  @media (max-width: ${BreakPoints.bpLargeDevices}) {
    width: 80vw;
    margin: auto;
  }

  @media (max-width: ${BreakPoints.bgMediumDevices}) {
    width: 85vw;
    margin: auto;
  }

  @media (max-width: ${BreakPoints.bgSmallDevices}) {
    width: 90vw;
    margin: auto;
  }
`;

export const TabsBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Tabs = styled.div`
  border-radius: 1rem 1rem 0rem 0rem;
  background-color: ${Colors.secondBackround};
  padding: 1rem 2rem;
  @media (max-width: ${BreakPoints.bgSmallDevices}) {
    font-size: 1rem;
    padding: 1rem 0.75rem;
    font-size: 1rem;
    text-align: center;
  }
`;

export const TabsArea = styled.div`
  border-radius: 1rem 1rem 0rem 0rem;
  display: flex;
`;

export const InfoArea = styled.div`
  padding: 2.5rem;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: 1rem;
  gap: 1rem;

  height: 100%;
  background-color: ${Colors.secondBackround};

  @media (max-width: ${BreakPoints.bgMediumDevices}) {
    border-radius: 0rem 0rem 1rem 1rem;
    padding: 0.75rem;
  }
`;

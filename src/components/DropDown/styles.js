import styled from "styled-components";
import { keyframes } from "styled-components";

export const ContainerLabel = styled.div`
  color: var(--gray0);
  text-align: left;
  margin-top: 27px;
  p {
    color: var(--redFailed);
  }
`;
export const InvisibleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  height: 40px;
  svg {
    color: var(--gray1);
    margin-left: -40px;
    margin-top: 20px;
  }
  select {
    display: flex;
    align-items: center;
    color: var(--gray1);
    background: var(--gray2);
    width: 100%;
    height: 40px;
    min-width: 263px;
    max-width: 263px;
    margin-top: 17px;
    text-align: left;
    font-size: 1rem;
    border: none;
    border-radius: 3px;
  }
`;
export const Container = styled.input``;

const appearFromTop = keyframes`
    from{
        opacity:0;
        transform: translateY(-30px);
    }
    to {
        opacity:1;
     transform: translateY(0px);
    }
`;

export const ContainerDown = styled.option`
  display: flex;
  align-items: center;
  background: var(--gray2);
  text-align: center;
  font-size: 1rem;
  width: 100%;
  box-shadow: 0px 0px 40px -10px black;
  min-width: 263.79px;
  max-width: 329.93px;
  padding-left: 10px;
  height: 40px;
  color: var(--gray1);
  animation: ${appearFromTop} 1s;
  &&:hover {
    color: var(--gray0);
    background: var(--gray1);
  }
`;

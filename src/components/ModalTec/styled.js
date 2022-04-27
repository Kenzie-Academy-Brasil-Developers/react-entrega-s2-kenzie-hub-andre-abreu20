import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background: var(--gray2);
  h3 {
    padding-left: 20px;
  }
  button {
    background: var(--gray2);
    color: var(--gray0);
    border: none;
    padding-right: 20px;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
`;

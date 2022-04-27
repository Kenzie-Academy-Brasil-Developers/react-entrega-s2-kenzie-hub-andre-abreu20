import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  width: 100%;
  max-width: 1100px;
  height: 100vh;
`;

export const ContainerLogoButton = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  min-width: 300px;
  width: 100%;
  max-width: 880px;
  width: 80%;
  height: 13vh;
  h3 {
    margin-top: 0;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 13vh;
  border-top: 1px solid var(--gray3);
  border-bottom: 1px solid var(--gray3);
  margin-top: 100px;
  padding: 20px 0 20px 0;
  > span {
    font-weight: 400;
    color: var(--gray1);
  }
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  } ;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 8vh;
`;

export const ContainerCourses = styled.ul`
  display: ${(props) => (props && props.showTecs ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  list-style: none;
  background: var(--gray3);
  width: 80%;
  padding-bottom: 22px;
  border-radius: 4px;
  li {
    background: var(--gray4);
    margin-top: 22px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    height: 7vh;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background: var(--gray2);
    }
    h3 {
      font-weight: 700;
      padding-left: 20px;
    }
    > span {
      font-weight: 400;
      padding-right: 20px;
      color: var(--gray1);
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  width: 94vw;
  max-width: 410px;
  form {
    h3 {
      text-align: center;
      font-size: 1rem;
      margin-bottom: 17px;
    }
    > span {
      font-size: small;
      margin-top: 38px;
      text-align: center;
      color: var(--gray1);
    }
  }
`;
export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  margin-top: 20px;
  background: var(--gray3);
  width: 94vw;
  height: 100%;
  min-height: 568.47px;
  max-height: 764px;
  max-width: 410px;
  form {
    display: flex;
    flex-direction: column;
    margin: 33px 14px;
    height: 100%;
  }
`;
export const LogoButtonContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: space-between;
`;

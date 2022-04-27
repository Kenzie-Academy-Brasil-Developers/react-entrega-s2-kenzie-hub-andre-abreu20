import styled from "styled-components";
import { css } from "styled-components";
export const Container = styled.div`
  text-align: left;
  margin-top: 30px;
  div {
    > span {
      color: var(--redFailed);
    }
  }
`;

export const InputContainer = styled.div`
  background: var(--gray2);
  color: var(--gray0);
  width: 70vw;
  min-width: 263.79px;
  max-width: 329.93px;
  width: 100%;
  display: flex;
  align-items: center;
  transition: 0.4s;
  margin-top: 17px;
  border-radius: 3px;

  input {
    border-radius: 3px;
    background: transparent;
    border: 1px solid var(--gray2);
    align-items: center;
    flex: 1;
    height: 40px;
    padding: 0px 0px 0px 10px;
    color: var(--gray1);

    ${(props) =>
      props.isErrored &&
      css`
        border-color: var(--redFailed);
      `}

    &::placeholder {
      color: var(--gray1);
    }

    &:focus {
      border-color: var(--gray0);
      color: var(--gray0);
    }

    &:-webkit-autofill,
    &:-webkit-autofill:focus {
      transition: background-color 600000s 0s, color 600000s 0s;
    }
    &[data-autocompleted] {
      background-color: transparent !important;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) => props.color && props.color};
  max-width: ${(props) => props.maxWidth && props.maxWidth};
  width: 100%;
  height: 38.5px;
  margin-top: 30px;
  align-items: center;
  border: none;
  border-radius: 4px;
  color: var(--gray0);
`;

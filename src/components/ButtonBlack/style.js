import styled from "styled-components";

export const Button = styled.button`
  background: var(--gray3);
  text-align: center;
  border: none;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--gray0);
  border-radius: 4px;
  width: ${(props) => props && props.width};
  height: ${(props) => props && props.height};
  :hover {
    background: var(--gray2);
  }
`;

import styled from "styled-components";

export const TaskList = styled.ul`
  width: 100%;
  height: auto;
  overflow-y: scroll;
  margin-bottom: 0.5rem;
  padding-top: 1rem;

  ${({ theme }) => theme.device.md} {
    height: 65vh;
  }
`;

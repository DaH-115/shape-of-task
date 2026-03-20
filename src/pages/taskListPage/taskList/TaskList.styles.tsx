import styled from "styled-components";

export const TaskList = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 1rem; /* 웹/모바일 동일 - 아이템 그림자 표시 공간 */

  ${({ theme }) => theme.device.md} {
    height: 65vh;
  }
`;

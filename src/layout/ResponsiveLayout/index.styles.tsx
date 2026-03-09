import styled from 'styled-components';

export const DesktopContainer = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.commonColors.light_gray};
  min-width: 768px;

  ${({ theme }) => theme.device.md} {
    display: flex;
  }
`;

export const DesktopColumn = styled.div`
  flex: 1;
  min-width: 0; /* flexbox overflow 방지 */
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  flex: 1;
  min-height: 0; /* flexbox에서 overflow 처리를 위해 필요 */

  ${({ theme }) => theme.device.md} {
    display: none;
  }
`;

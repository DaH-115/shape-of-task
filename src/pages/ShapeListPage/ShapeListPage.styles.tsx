import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;

  /* scrollbar */
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const MessagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 0 2rem;
`;

export const BlankMessage = styled.p`
  font-size: 0.8rem;
  text-align: center;
  color: ${({ theme }) => theme.commonColors.gray};
`;

export const ShapeListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 1rem;
`;

export const ShapeListWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #fff;
  border: 0.1rem solid ${({ theme }) => theme.commonColors.gray};
  border-radius: 1rem;

  margin-bottom: 1rem;
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
`;

export const ShapeList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
`;

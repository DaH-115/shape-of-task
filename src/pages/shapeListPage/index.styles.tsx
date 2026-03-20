import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  min-height: 0;
  padding: 1rem;
  overflow: hidden;

  ${({ theme }) => theme.device.md} {
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  min-height: 0;
  padding: 1rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  ${({ theme }) => theme.device.md} {
    height: 100%;
    border-radius: 1rem;
    box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
  }
`;

export const ShapeListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.75rem;
  flex-shrink: 0;

  ${({ theme }) => theme.device.md} {
    margin-bottom: 1rem;
  }
`;

export const ShapeList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  padding-top: 1rem;
`;

export const ShapeListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const SaveButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  padding-top: 2rem;
`;

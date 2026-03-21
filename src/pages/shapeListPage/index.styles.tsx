import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  min-height: 0;
  padding: 1rem 0.5rem;
  overflow: hidden;
`;

export const WrapperOuter = styled.div`
  width: 100%;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.elevated};
  overflow: visible;
`;

export const WrapperInner = styled.div`
  width: 100%;
  flex: 1;
  min-height: 0;
  padding: 1rem;
  background-color: ${({ theme }) => theme.commonColors.surface};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 1rem;
`;

export const ShapeListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  flex-shrink: 0;
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

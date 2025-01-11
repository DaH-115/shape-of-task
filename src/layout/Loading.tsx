import styled from 'styled-components';

const Loading = () => {
  return (
    <LoadingWrapper role='status'>
      <LoadingSpinner aria-hidden />
    </LoadingWrapper>
  );
};

export default Loading;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LoadingSpinner = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-top: 3px solid #000;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 0.8s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

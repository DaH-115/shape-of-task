import styled from 'styled-components';

export const ErrorMsg = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-bottom: 0.4rem;
`;

export const ModalHeader = styled.div`
  margin-bottom: 1rem;
`;

export const InputLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const InputForm = styled.form`
  width: 100%;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 6rem;
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.commonColors.gray};
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.1rem solid ${({ theme }) => theme.commonColors.light_gray};
  padding-top: 0.5rem;
`;

export const SelectShapesWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;

  ${({ theme }) => theme.device.tablet} {
    width: 50%;
  }
`;

export const ToggleBtn = styled.button`
  padding: 0.5rem;

  svg {
    font-size: 1rem;
  }
`;

export const SubmitBtnWrapper = styled.div`
  width: 100%;
  margin-left: 0.5rem;

  ${({ theme }) => theme.device.tablet} {
    width: 20%;
  }
`;

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

  &:focus {
    outline: 0.1rem solid ${({ theme }) => theme.commonColors.light_gray};
    border-radius: 0.4rem;
  }

  &::placeholder {
    color: ${({ theme }) => theme.commonColors.gray};
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-top: 0.1rem solid ${({ theme }) => theme.commonColors.light_gray};
  padding-top: 1rem;
`;

export const SelectShapesWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 160px;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 1rem;
  padding: 0.5rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.commonColors.light_gray};
  }
`;

export const ToggleBtn = styled.button`
  padding: 0.3rem;
  margin-left: 0.5rem;

  svg {
    font-size: 1rem;
    color: ${({ theme }) => theme.commonColors.gray};
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.important};
    }
  }
`;

export const SubmitBtnWrapper = styled.div`
  width: 160px;
  flex-shrink: 0;
`;

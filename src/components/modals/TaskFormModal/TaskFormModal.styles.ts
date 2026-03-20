import styled from "styled-components";
import { mixins } from "@/styles/theme-mixins";

export const ErrorMsg = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

export const ModalHeader = styled.div`
  margin-bottom: 1.5rem;
`;

export const InputLabel = styled.label`
  ${mixins.visuallyHidden}
`;

export const InputForm = styled.form`
  width: 100%;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 6rem;
  padding: 0;
  resize: none;
  margin-bottom: 1rem;
  font-size: 1rem;

  &:focus {
    outline: 0.1rem solid ${({ theme }) => theme.commonColors.gray_border};
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
  gap: 0.75rem;
  min-width: 0; /* flex 자식이 부모보다 줄어들 수 있도록 */
  border-top: 0.1rem solid ${({ theme }) => theme.commonColors.gray_border};
  padding-top: 0.75rem;
`;

export const SelectShapesWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 0 1 auto; /* 콘텐츠 크기만 차지, 필요 시 축소 */
  min-width: 0;
  max-width: 10rem; /* 과도하게 커지지 않도록 제한 */
  overflow: hidden;
  cursor: pointer;
  border-radius: 0.75rem;
  padding: 0.35rem 0.5rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.commonColors.light_gray};
  }
`;

export const ToggleButton = styled.button`
  flex-shrink: 0;
  padding: 0.25rem;
  margin-left: 0.25rem;

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

export const SubmitButtonWrapper = styled.div`
  flex-shrink: 0;
  min-width: 4rem; /* 등록 버튼 최소 너비 */
`;

import styled, { css } from 'styled-components';

const FormBox = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 125px;
`;

const TodoMessage = styled.div`
  width: 50%;
  font-size: 18px;
  padding: 20px;
  letter-spacing: -0.02em;
`;

const AddButtonBox = styled.button`
  ${({ theme }) => {
    return css`
      width: 50%;
      height: 125px;
      font-size: 24px;
      letter-spacing: -0.04em;
      padding: 20px;

      &:hover {
        color: ${theme.colors.orange};
      }

      &:active {
        color: #fff;
        background-color: ${theme.colors.orange};
      }
    `;
  }}
`;

const AddButton = ({ todoLength }) => {
  return (
    <FormBox>
      <TodoMessage>총 12개의 할 일이 있습니다.</TodoMessage>
      <AddButtonBox>새로운 일 +</AddButtonBox>
    </FormBox>
  );
};

export default AddButton;

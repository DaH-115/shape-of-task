import styled from 'styled-components';
import Wrapper from '../layout/Wrapper';
import SelectBox from './SelectBox';

const ModalInputWapper = styled.div`
  /* display: none; */
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 500px;
`;

const ModalInputTextBox = styled.div`
  position: absolute;
  display: flex;
  padding: 20px 15px 10px 20px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #a6c6c4;

  h3 {
    margin-right: 8px;
  }

  p {
    padding-top: 3px;
  }
`;

const ModalInputForm = styled.form`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding-top: 50px;
  box-shadow: 0px 5px 40px rgba(177, 177, 177, 0.25);
`;

const ModalInputBox = styled.textarea`
  font-family: 'Pretendard';
  width: 100%;
  height: 430px;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 24px;
`;

const ModalInputButton = styled.button`
  width: 48px;
  height: 48px;
  font-size: 48px;
  margin-left: 80px;
`;

const today = new Date();

const ModalInput = () => {
  return (
    <ModalInputWapper>
      <ModalInputTextBox>
        <h3>To-do</h3>
        <p>{today.toLocaleDateString()}</p>
      </ModalInputTextBox>

      <ModalInputForm>
        <ModalInputBox />
        <Wrapper>
          <SelectBox />
          <ModalInputButton>+</ModalInputButton>
        </Wrapper>
      </ModalInputForm>
    </ModalInputWapper>
  );
};

export default ModalInput;

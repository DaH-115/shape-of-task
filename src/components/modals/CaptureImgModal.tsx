import React, { useState, useEffect, useCallback } from 'react';
import html2canvas from 'html2canvas';
import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { modalIsClose } from 'store/modalSlice';
import StyledBtn from 'styles/StyledBtn';
import Modal from 'layout/Modal';

const CaptureImgModal = ({
  captureList,
}: {
  captureList: HTMLUListElement;
}) => {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector((state) => state.todoList.todoList);
  const paletteName = useAppSelector((state) => state.themeChange.paletteName);
  const isCaptureState = useAppSelector((state) => state.modal.captureState);
  const [isCapturedImg, setIsCapturedImg] = useState<string>('');

  useEffect(() => {
    (async () => {
      const figureListImg = await html2canvas(captureList);
      setIsCapturedImg(figureListImg.toDataURL('image/jpg'));
    })();
  }, [paletteName, captureList, todoList]);

  const onModalCloseHandler = useCallback(() => {
    dispatch(modalIsClose());
  }, [dispatch]);

  return (
    <Modal modalState={isCaptureState}>
      <CapturedImgModal>
        <CaptureModalHeader>
          <CaptureModalTitle>{'이미지로 보기'}</CaptureModalTitle>
          <CaptureModalDesc>
            {'다채로웠던 나만의 하루를 이미지로 저장해 보세요'}
          </CaptureModalDesc>
        </CaptureModalHeader>
        <ImageWrapper>
          <img src={isCapturedImg} alt='square, triangle, circle Figure List' />
        </ImageWrapper>
        <ButtonWrapper>
          <CaptureBtn onClick={onModalCloseHandler}>{'저장하기'}</CaptureBtn>
          <CloseBtn onClick={onModalCloseHandler}>{'닫기'}</CloseBtn>
        </ButtonWrapper>
      </CapturedImgModal>
    </Modal>
  );
};

export default React.memo(CaptureImgModal);

const CapturedImgModal = styled.div`
  width: 100%;
  height: 100%;

  background-color: #fff;
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
  border-radius: 1rem;
  padding: 1rem;
`;

const CaptureModalHeader = styled.div`
  width: 100%;
`;

const CaptureModalTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const CaptureModalDesc = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.commonColors.gray};
  margin-bottom: 0.8rem;
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin-top: 0.6rem;

  img {
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.1rem solid ${({ theme }) => theme.commonColors.light_gray};
  padding-top: 0.5rem;
`;

const CloseBtn = styled(StyledBtn)`
  width: 100%;
`;

const CaptureBtn = styled(StyledBtn)`
  width: 100%;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.important};
  border-color: ${({ theme }) => theme.colors.important};
  margin-right: 0.3rem;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.important};
    background-color: #fff;
    transition: all 0.4s ease-in-out;
  }
`;

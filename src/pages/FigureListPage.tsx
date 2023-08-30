import { useState, useRef, useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { modalIsClose } from 'store/modalSlice';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import useArrCheck from 'hooks/useArrCheck';

import Modal from 'layout/Modal';
import FigureListItem from 'components/FigureListItem';
import StyledBtn from 'styles/StyledBtn';
import MessageBox from 'layout/InfoMessage';

const FigureListPage = () => {
  const figureListRef = useRef<HTMLUListElement>(null);
  const dispatch = useAppDispatch();
  const todoList = useAppSelector((state) => state.todoList.todoList);
  const isCaptureState = useAppSelector((state) => state.modal.captureState);
  const paletteName = useAppSelector((state) => state.themeChange.paletteName);
  const [isCapturedImg, setIsCapturedImg] = useState<string>('');
  const arrCheck = useArrCheck();

  useEffect(() => {
    const figureList = figureListRef.current!;
    (async () => {
      const figureListImg = await html2canvas(figureList);
      setIsCapturedImg(figureListImg.toDataURL('image/jpg'));
    })();
  }, [todoList, paletteName]);

  const onModalCloseHandler = useCallback(() => {
    dispatch(modalIsClose());
  }, [dispatch]);

  return (
    <FigureListWrapper>
      {isCapturedImg && (
        <Modal modalState={isCaptureState}>
          <CapturedImgModal>
            <h1>{'이미지로 보기'}</h1>
            <p>{'다채로운 하루를 저장해 보세요!'}</p>
            <ImageWrapper>
              <img
                src={isCapturedImg}
                alt='square, triangle, circle Figure List'
              />
            </ImageWrapper>
            <CloseBtn onClick={onModalCloseHandler}>{'닫기'}</CloseBtn>
          </CapturedImgModal>
        </Modal>
      )}
      <FigureList ref={figureListRef}>
        {arrCheck === undefined ? (
          <MessageBox message='가끔은 여백도 괜찮아요' />
        ) : (
          todoList.map((todoItem: any) => (
            <FigureListItem
              key={todoItem.id}
              figure={todoItem.figure}
              done={todoItem.done}
            />
          ))
        )}
      </FigureList>
    </FigureListWrapper>
  );
};

export default FigureListPage;

const FigureListWrapper = styled.main`
  flex: 1;
  padding: 1rem;
`;

const FigureList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CapturedImgModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 1rem;

  &::after {
    content: ' ';
    display: block;
    clear: both;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.commonColors.gray};
    margin-top: 0.3rem;

    &::after {
      content: ' ';
      display: block;
      margin-top: 0.5rem;
      border-bottom: 0.1rem solid
        ${({ theme }) => theme.commonColors.light_gray};
    }
  }
`;

const CloseBtn = styled(StyledBtn)`
  float: right;
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin-top: 0.6rem;

  img {
    width: 100%;
  }
`;

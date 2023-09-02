import React, { useRef, useCallback, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import FigureListItem from 'components/FigureListItem';
import CaptureImgModal from 'components/modals/CaptureImgModal';
import StyledBtn from 'styles/StyledBtn';
import { captureModalIsOpen } from 'store/modalSlice';

import html2canvas from 'html2canvas';

const FigureListPage = () => {
  const [isCapturedImg, setIsCapturedImg] = useState<string>('');
  const dispatch = useAppDispatch();
  const figureListRef = useRef<HTMLUListElement>(null);
  const figureList = figureListRef.current!;
  const todoList = useAppSelector((state) => state.todoList.todoList);
  const isDoneArr = todoList.filter(
    (item: { done: boolean }) => item.done === true
  );

  const onCaptureModalOpen = useCallback(async () => {
    const figureListImg = await html2canvas(figureList);
    setIsCapturedImg(figureListImg.toDataURL('image/jpg'));
    dispatch(captureModalIsOpen());
  }, [dispatch, figureList]);

  return (
    <FigureListWrapper>
      {figureList && <CaptureImgModal capturedImg={isCapturedImg} />}
      <Wrapper>
        <FigureListHeader>
          <FigureListTitle>{'완료된 일'}</FigureListTitle>
          <FigureListDesc>
            {'도형으로 확인하고'}
            <br />
            {'나만의 이미지로 만들어 보세요'}
          </FigureListDesc>
        </FigureListHeader>
        <FigureList ref={figureListRef}>
          {todoList &&
            todoList.map((todoItem: any) => (
              <FigureListItem
                key={todoItem.id}
                figure={todoItem.figure}
                done={todoItem.done}
              />
            ))}
        </FigureList>
      </Wrapper>
      <ButtonWrapper>
        <CaptureBtn
          onClick={onCaptureModalOpen}
          disabled={isDoneArr.length ? false : true}
        >
          {'이미지로 만들기'}
        </CaptureBtn>
      </ButtonWrapper>
    </FigureListWrapper>
  );
};

export default React.memo(FigureListPage);

const FigureListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem 2rem;

  ${({ theme }) => theme.device.tablet} {
    padding: 2rem 3rem;
  }
`;

const Wrapper = styled.div`
  flex: 1;

  padding: 1rem;
  background-color: #fff;
  border-radius: 1rem;

  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
`;

const FigureListHeader = styled.div`
  padding: 0.5rem;
`;

const FigureListTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const FigureListDesc = styled.p`
  font-size: 0.9rem;
  line-height: 1.2rem;
  color: ${({ theme }) => theme.commonColors.gray};
  margin-bottom: 0.8rem;
`;

const FigureList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 1.5rem;
`;

const CaptureBtn = styled(StyledBtn)`
  width: 100%;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.important};
  border-color: ${({ theme }) => theme.colors.important};
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.important};
    background-color: #fff;
    transition: all 0.4s ease-in-out;
  }

  ${({ theme }) => theme.device.tablet} {
    width: auto;
  }

  &:disabled {
    color: ${({ theme }) => theme.commonColors.gray};
    background-color: #fff;
  }
`;

import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import { useAppSelector } from 'store/hooks';
import { alertIsOpen } from 'store/modalSlice';
import StyledBtn from 'styles/StyledBtn';
import FigureListItem from 'components/FigureListItem';
import { GiSaveArrow } from 'react-icons/gi';
import { useDispatch } from 'react-redux';

const FigureListPage = () => {
  const figureListRef = useRef<HTMLUListElement>(null);
  const dispatch = useDispatch();
  const todoList = useAppSelector((state) => state.todoList.todoList);
  const isDoneArr = todoList.filter(
    (item: { done: boolean }) => item.done === true
  );

  const onCaptureModalOpen = useCallback(async () => {
    try {
      const figureList = figureListRef.current!;
      const figureListImg = await html2canvas(figureList, { scale: 4 });

      figureListImg.toBlob((blob) => {
        if (blob) {
          saveAs(blob, 'result.png');
        }
      });
    } catch (error) {
      dispatch(alertIsOpen());
    }
  }, [dispatch]);

  return (
    <FigureListWrapper>
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
          {'이미지 저장하기'}
          <IconWrapper>
            <GiSaveArrow />
          </IconWrapper>
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
  font-size: 1.1rem;
  line-height: 1.2rem;
  color: ${({ theme }) => theme.commonColors.gray};
  margin-bottom: 0.8rem;

  ${({ theme }) => theme.device.tablet} {
    font-size: 1rem;
  }
`;

const FigureList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 4rem 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;

  margin-top: 1.2rem;
  color: #fff;
`;

const CaptureBtn = styled(StyledBtn)`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
  color: #fff;
  padding: 0.6rem 0.8rem;
  border-radius: 1.4rem;

  background-color: ${({ theme }) => theme.colors.important};
  border-color: ${({ theme }) => theme.colors.important};
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);

  &:hover,
  &:active {
    background-color: #fff;
  }

  &:disabled {
    background-color: #fff;
  }

  ${({ theme }) => theme.device.tablet} {
    width: auto;
    justify-content: space-around;
    font-size: 0.8rem;
  }
`;

const IconWrapper = styled.div`
  font-size: 1.2rem;
  margin-left: 0.6rem;

  ${({ theme }) => theme.device.tablet} {
    font-size: 1rem;
    margin-left: 0.4rem;
  }
`;

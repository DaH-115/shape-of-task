import { useCallback, useState, RefObject } from 'react';
import { useAppDispatch } from 'store/hooks';
import { errorAlertIsOpen } from 'store/modalSlice';
import captureImages from 'utils/captureImages';
import saveAs from 'file-saver';

// 이미지 저장 기능을 위한 커스텀 훅
export const useSaveImage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  // 이미지 캡처 및 저장 함수
  const saveImage = useCallback(
    async (taskListRef: RefObject<HTMLUListElement | null>) => {
      // 작업 목록이 없으면 에러 알림
      if (!taskListRef.current) {
        dispatch(
          errorAlertIsOpen('작업 목록이 없어 이미지를 저장할 수 없습니다.')
        );
        return;
      }

      // 로딩 상태 시작
      setIsLoading(true);

      try {
        // 1단계: 이미지 캡처
        const { paddedCanvas, fileName } = await captureImages(taskListRef);

        // 2단계: 파일 저장을 위한 Blob 생성
        const blob = await new Promise<Blob>((resolve, reject) => {
          paddedCanvas.toBlob((blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('이미지 변환 실패'));
            }
          });
        });

        // 3단계: 파일 다운로드
        saveAs(blob, fileName);
      } catch (error) {
        // 에러 타입에 따른 구체적인 메시지
        const errorMessage =
          error instanceof Error
            ? error.message
            : '이미지 저장에 실패했습니다.';
        dispatch(errorAlertIsOpen(errorMessage));
      } finally {
        // 로딩 상태 종료
        setIsLoading(false);
      }
    },
    [dispatch]
  );

  return { saveImage, isLoading };
};

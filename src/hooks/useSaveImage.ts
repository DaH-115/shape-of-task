import { useCallback, useState, RefObject } from 'react';
import { useAppDispatch } from 'store/hooks';
import { errorAlertOpenHandler } from 'store/modalSlice';
import captureImages from 'utils/captureImages';
import saveAs from 'file-saver';

// 에러 메시지 상수
const ERROR_MESSAGES = {
  NO_TASK_LIST: 'No task list available to save as image.',
  CAPTURE_FAILED: 'Failed to capture image.',
  CONVERT_FAILED: 'Failed to convert image.',
  SAVE_FAILED: 'Failed to save image.',
  UNKNOWN_ERROR: 'An unknown error occurred.',
} as const;

// 훅 반환 타입
interface UseSaveImageReturn {
  saveImage: (taskListRef: RefObject<HTMLUListElement | null>) => Promise<void>;
  isLoading: boolean;
}

/**
 * 이미지 저장 기능을 위한 커스텀 훅
 */
export const useSaveImage = (): UseSaveImageReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  // 이미지 캡처 및 저장 함수
  const saveImage = useCallback(
    async (taskListRef: RefObject<HTMLUListElement | null>) => {
      // 에러 처리 헬퍼
      const handleError = (error: unknown, defaultMessage: string) => {
        const errorMessage =
          error instanceof Error ? error.message : defaultMessage;
        dispatch(errorAlertOpenHandler(errorMessage));
      };

      // 초기 검증
      if (!taskListRef.current) {
        dispatch(errorAlertOpenHandler(ERROR_MESSAGES.NO_TASK_LIST));
        return;
      }

      setIsLoading(true);

      try {
        // 이미지 캡처
        const { paddedCanvas, fileName } = await captureImages(taskListRef);

        // 이미지 변환
        const blob = await new Promise<Blob>((resolve, reject) => {
          paddedCanvas.toBlob((blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error(ERROR_MESSAGES.CONVERT_FAILED));
            }
          });
        });

        // 파일 저장
        saveAs(blob, fileName);
      } catch (error) {
        handleError(error, ERROR_MESSAGES.UNKNOWN_ERROR);
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch]
  );

  return {
    saveImage,
    isLoading,
  };
};

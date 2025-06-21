import { useCallback, useState, RefObject } from 'react';
import { useAppDispatch } from 'store/hooks';
import { errorAlertOpenHandler } from 'store/modalSlice';
import captureImages from 'utils/captureImages';
import saveAs from 'file-saver';

// 에러 메시지 상수
const ERROR_MESSAGES = {
  NO_TASK_LIST: '작업 목록이 없어 이미지를 저장할 수 없습니다.',
  CAPTURE_FAILED: '이미지 캡처에 실패했습니다.',
  CONVERT_FAILED: '이미지 변환에 실패했습니다.',
  SAVE_FAILED: '이미지 저장에 실패했습니다.',
  UNKNOWN_ERROR: '알 수 없는 오류가 발생했습니다.',
} as const;

// 진행률 단계
enum SaveStep {
  IDLE = 'idle',
  CAPTURING = 'capturing',
  CONVERTING = 'converting',
  SAVING = 'saving',
}

// 훅 반환 타입
interface UseSaveImageReturn {
  saveImage: (taskListRef: RefObject<HTMLUListElement | null>) => Promise<void>;
  isLoading: boolean;
  currentStep: SaveStep;
  progress: number;
}

/**
 * 이미지 저장 기능을 위한 커스텀 훅
 * - 단계별 진행률 표시
 * - 명확한 에러 메시지
 * - 타입 안전성 보장
 */
export const useSaveImage = (): UseSaveImageReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState<SaveStep>(SaveStep.IDLE);
  const [progress, setProgress] = useState(0);
  const dispatch = useAppDispatch();

  // 진행률 업데이트 헬퍼
  const updateProgress = (step: SaveStep, progressValue: number) => {
    setCurrentStep(step);
    setProgress(progressValue);
  };

  // 이미지 캡처 및 저장 함수
  const saveImage = useCallback(
    async (taskListRef: RefObject<HTMLUListElement | null>) => {
      // 에러 처리 헬퍼 (useCallback 내부로 이동)
      const handleError = (error: unknown, defaultMessage: string) => {
        const errorMessage =
          error instanceof Error ? error.message : defaultMessage;
        dispatch(errorAlertOpenHandler(errorMessage));
      };

      // 1. 초기 검증
      if (!taskListRef.current) {
        dispatch(errorAlertOpenHandler(ERROR_MESSAGES.NO_TASK_LIST));
        return;
      }

      setIsLoading(true);
      updateProgress(SaveStep.CAPTURING, 0);

      try {
        // 2. 이미지 캡처 단계
        updateProgress(SaveStep.CAPTURING, 30);
        const { paddedCanvas, fileName } = await captureImages(taskListRef);

        // 3. 이미지 변환 단계
        updateProgress(SaveStep.CONVERTING, 60);
        const blob = await new Promise<Blob>((resolve, reject) => {
          paddedCanvas.toBlob((blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error(ERROR_MESSAGES.CONVERT_FAILED));
            }
          });
        });

        // 4. 파일 저장 단계
        updateProgress(SaveStep.SAVING, 90);
        saveAs(blob, fileName);

        // 5. 완료
        updateProgress(SaveStep.IDLE, 100);
      } catch (error) {
        // 단계별 구체적인 에러 처리
        let errorMessage: string;

        if (currentStep === SaveStep.CAPTURING) {
          errorMessage = ERROR_MESSAGES.CAPTURE_FAILED;
        } else if (currentStep === SaveStep.CONVERTING) {
          errorMessage = ERROR_MESSAGES.CONVERT_FAILED;
        } else if (currentStep === SaveStep.SAVING) {
          errorMessage = ERROR_MESSAGES.SAVE_FAILED;
        } else {
          errorMessage = ERROR_MESSAGES.UNKNOWN_ERROR;
        }

        handleError(error, errorMessage);
      } finally {
        setIsLoading(false);
        setCurrentStep(SaveStep.IDLE);
        setProgress(0);
      }
    },
    [dispatch, currentStep]
  );

  return {
    saveImage,
    isLoading,
    currentStep,
    progress,
  };
};

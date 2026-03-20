import { useCallback, useState, RefObject } from "react";
import { useAppDispatch } from "@/store/hooks";
import { errorAlertOpenHandler } from "@/store/modalSlice";
import captureImages from "@/utils/captureImages";
import saveAs from "file-saver";

// 에러 메시지 상수
const ERROR_MESSAGES = {
  NO_TASK_LIST: "No task list available to save as image.",
  CONVERT_FAILED: "Failed to convert image.",
  SAVE_FAILED: "Failed to save image.",
  UNKNOWN_ERROR: "An unknown error occurred.",
} as const;

// 훅 반환 타입
interface UseSaveImageReturn {
  saveImage: (taskListRef: RefObject<HTMLUListElement | null>) => Promise<void>;
  isLoading: boolean;
}

/** 캔버스를 Blob으로 변환 */
const canvasToBlob = (canvas: HTMLCanvasElement): Promise<Blob> =>
  new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) =>
        blob ? resolve(blob) : reject(new Error(ERROR_MESSAGES.CONVERT_FAILED)),
      "image/png",
    );
  });

/**
 * 이미지 저장 기능을 위한 커스텀 훅
 */
export const useSaveImage = (): UseSaveImageReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  // 이미지 저장 핸들러
  const saveImage = useCallback(
    async (taskListRef: RefObject<HTMLUListElement | null>) => {
      const handleError = (error: unknown, defaultMessage: string) => {
        const message = error instanceof Error ? error.message : defaultMessage;
        dispatch(errorAlertOpenHandler(message));
      };

      // 할일 목록이 없으면 에러 메시지 표시
      if (!taskListRef.current) {
        dispatch(errorAlertOpenHandler(ERROR_MESSAGES.NO_TASK_LIST));
        return;
      }

      // 할일 목록 요소 가져오기
      const taskListElement = taskListRef.current;

      // 로딩 상태 설정
      setIsLoading(true);

      // 이미지 캡처 및 저장
      try {
        const { paddedCanvas, fileName } = await captureImages(taskListElement);
        const blob = await canvasToBlob(paddedCanvas);

        try {
          saveAs(blob, fileName);
        } catch (saveError) {
          handleError(saveError, ERROR_MESSAGES.SAVE_FAILED);
        }
      } catch (error) {
        handleError(error, ERROR_MESSAGES.UNKNOWN_ERROR);
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch],
  );

  return {
    saveImage,
    isLoading,
  };
};

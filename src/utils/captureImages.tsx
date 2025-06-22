import html2canvas from 'html2canvas';
import { RefObject } from 'react';

// 반환 타입 정의
interface CaptureResult {
  paddedCanvas: HTMLCanvasElement;
  fileName: string;
}

/**
 * 작업 목록을 이미지로 캡처하는 함수
 */
const captureImages = async (
  taskListRef: RefObject<HTMLUListElement | null>
): Promise<CaptureResult> => {
  if (!taskListRef.current) {
    throw new Error('No image to save.');
  }

  const taskList = taskListRef.current;

  try {
    // HTML을 캔버스로 변환
    const taskListImg = await html2canvas(taskList, {
      scale: 2,
      useCORS: true,
      logging: false,
      allowTaint: true,
    });

    // 패딩이 있는 새 캔버스 생성
    const paddedCanvas = document.createElement('canvas');
    const paddingSize = 20;

    paddedCanvas.width = taskListImg.width + paddingSize * 2;
    paddedCanvas.height = taskListImg.height + paddingSize * 2;

    // 캔버스에 그리기
    const ctx = paddedCanvas.getContext('2d');
    if (!ctx) {
      throw new Error('캔버스 생성에 실패했습니다.');
    }

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, paddedCanvas.width, paddedCanvas.height);
    ctx.drawImage(taskListImg, paddingSize, paddingSize);

    // 파일명 생성 (한국 시간)
    const now = new Date();
    const kstTime = new Date(now.getTime() + 9 * 60 * 60 * 1000);
    const dateStr = kstTime.toISOString().slice(0, 19).replace(/[T:]/g, '-');
    const fileName = `할일목록_${dateStr}.png`;

    return { paddedCanvas, fileName };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to capture image.');
  }
};

export default captureImages;

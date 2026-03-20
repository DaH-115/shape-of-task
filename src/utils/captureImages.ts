import html2canvas from "html2canvas";

const PADDING_SIZE = 20;
const KST_OFFSET_MS = 9 * 60 * 60 * 1000;
const IMAGE_TIMEOUT_MS = 15000;
const CANVAS_SCALE = 2;

// 반환 타입 정의
interface CaptureResult {
  paddedCanvas: HTMLCanvasElement;
  fileName: string;
}

/** 한국 시간 기준 파일명 생성 (할일목록_YYYY-MM-DD-HH-mm-ss.png) */
export const generateFileName = (): string => {
  const now = new Date();
  const kstTime = new Date(now.getTime() + KST_OFFSET_MS);
  const dateStr = kstTime.toISOString().slice(0, 19).replace(/[T:]/g, "-");
  return `할일목록_${dateStr}.png`;
};

/**
 * 작업 목록을 이미지로 캡처하는 함수
 * @param taskListElement - 캡처할 DOM 요소 (검증은 호출부 책임)
 */
const captureImages = async (
  taskListElement: HTMLUListElement,
): Promise<CaptureResult> => {
  try {
    // 할일 목록 이미지 캡처
    const taskListImg = await html2canvas(taskListElement, {
      scale: CANVAS_SCALE,
      logging: false,
      imageTimeout: IMAGE_TIMEOUT_MS,
    });

    // 캔버스 생성
    const paddedCanvas = document.createElement("canvas");
    paddedCanvas.width = taskListImg.width + PADDING_SIZE * 2;
    paddedCanvas.height = taskListImg.height + PADDING_SIZE * 2;

    // 캔버스 컨텍스트 생성
    const ctx = paddedCanvas.getContext("2d");
    if (!ctx) {
      throw new Error("Failed to create canvas context.");
    }

    // 캔버스 채우기
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, paddedCanvas.width, paddedCanvas.height);

    // 할일 목록 이미지 그리기
    ctx.drawImage(taskListImg, PADDING_SIZE, PADDING_SIZE);

    // 파일명 생성
    const fileName = generateFileName();

    return { paddedCanvas, fileName };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Failed to capture image. Please try again.");
  }
};

export default captureImages;

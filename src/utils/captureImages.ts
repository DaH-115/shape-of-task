import html2canvas from "html2canvas";
import { commonColors, commonColorsDark } from "@/styles/theme-colors";

const PADDING_SIZE = 20;
const IMAGE_TIMEOUT_MS = 15000;
const CANVAS_SCALE = 2;
/**
 * 캡처 일시 글자 크기 (논리 px). html2canvas scale과 곱해 실제 캔버스 픽셀에 반영.
 */
const CAPTURE_DATE_FONT_LOGICAL_PX = 6;
const DATE_FONT_SIZE_CANVAS = CAPTURE_DATE_FONT_LOGICAL_PX * CANVAS_SCALE;
// 캡처 날짜 전용 줄 높이 (한글 여백 포함)
const DATE_STRIP_HEIGHT = DATE_FONT_SIZE_CANVAS + 14;
/** 흰 패딩으로 둘러싼 캡처 블록과 날짜 줄 사이 (패딩 영역 바깥으로 분리) */
const DATE_STRIP_OUTSIDE_GAP = 8;
/** 날짜 문구 가로 위치 — 할일 패딩(PADDING_SIZE)과 무관하게 캔버스 왼쪽 기준 */
const DATE_LABEL_INSET = 12;
/** 캡처 이미지 하단에 날짜 왼쪽에 붙는 앱 문구 */
const CAPTURE_FOOTER_BRAND = "SHAPE OF TASK";

// 반환 타입 정의
interface CaptureResult {
  paddedCanvas: HTMLCanvasElement;
  fileName: string;
}

/** 캡처 시각 메타 (파일명·이미지에 찍을 문구를 동일 시각으로 맞춤) */
interface CaptureMeta {
  fileName: string;
  dateCaption: string;
}

/** 한글 캡션 (이미지에 표시) */
const formatKoreanDateCaption = (at: Date): string => {
  const formatted = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(at);
  return `${formatted}`;
};

/** 파일명 네이밍 (한국 시각, 기존 패턴 유지) */
const formatFileNameStemSeoul = (at: Date): string => {
  const raw = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(at);
  return raw.replace(" ", "-").replace(/:/g, "-");
};

const buildCaptureMeta = (at: Date = new Date()): CaptureMeta => ({
  fileName: `할일목록_${formatFileNameStemSeoul(at)}.png`,
  dateCaption: formatKoreanDateCaption(at),
});

/** 한국 시간 기준 파일명 생성 (할일목록_YYYY-MM-DD-HH-mm-ss.png) */
export const generateFileName = (): string => buildCaptureMeta().fileName;

interface LayoutMetrics {
  canvasW: number;
  canvasH: number;
  taskX: number;
  taskY: number;
  /** 날짜 줄이 시작하는 y (패딩 박스 아래·간격 다음) */
  dateStripTop: number;
}

/**
 * 할일 비트맵 + 사방 패딩 = 한 덩어리, 그 아래 간격 뒤 날짜 줄 (날짜는 패딩 박스 바깥)
 */
const computeLayout = (taskW: number, taskH: number): LayoutMetrics => {
  const paddedBodyH = taskH + PADDING_SIZE * 2;
  return {
    canvasW: taskW + PADDING_SIZE * 2,
    canvasH: paddedBodyH + DATE_STRIP_OUTSIDE_GAP + DATE_STRIP_HEIGHT,
    taskX: PADDING_SIZE,
    taskY: PADDING_SIZE,
    dateStripTop: paddedBodyH + DATE_STRIP_OUTSIDE_GAP,
  };
};

/** 캡처 하단 줄: 브랜드 + 날짜 (Canvas 기본 타이포) */
const drawCaptureDateLabel = (
  ctx: CanvasRenderingContext2D,
  dateCaption: string,
  layout: LayoutMetrics,
  /** 배경 대비용 캡션 색 (라이트/다크 테마 정합) */
  captionFillColor: string,
): void => {
  ctx.font = `500 ${DATE_FONT_SIZE_CANVAS}px 'Roboto', 'Pretendard', -apple-system, BlinkMacSystemFont,
  'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
  'Helvetica Neue', sans-serif`;
  ctx.fillStyle = captionFillColor;
  ctx.textBaseline = "middle";
  ctx.textAlign = "left";

  const line = `${CAPTURE_FOOTER_BRAND} · ${dateCaption}`;
  const textX = DATE_LABEL_INSET;
  const textY = layout.dateStripTop + DATE_STRIP_HEIGHT / 2;
  ctx.fillText(line, textX, textY);
};

/** 캔버스 패딩·날짜 줄용 색 (앱 commonColors와 동기화) */
const captureChromeColors = (isDarkMode: boolean) =>
  isDarkMode
    ? {
        canvasBg: commonColorsDark.surface,
        captionFill: commonColorsDark.gray,
      }
    : {
        canvasBg: commonColors.surface,
        captionFill: commonColors.dark_gray,
      };

/**
 * 작업 목록을 이미지로 캡처하는 함수
 * @param taskListElement - 캡처할 DOM 요소 (검증은 호출부 책임)
 * @param isDarkMode - html2canvas 루트 배경·패딩·하단 날짜 영역 (화면 다크 모드와 맞춤)
 */
const captureImages = async (
  taskListElement: HTMLUListElement,
  isDarkMode = false,
): Promise<CaptureResult> => {
  try {
    const { canvasBg, captionFill } = captureChromeColors(isDarkMode);

    // ul 등 투명 영역은 html2canvas 기본이 흰색이라, 앱 surface와 동일하게 지정
    const taskListImg = await html2canvas(taskListElement, {
      scale: CANVAS_SCALE,
      logging: false,
      imageTimeout: IMAGE_TIMEOUT_MS,
      backgroundColor: canvasBg,
    });

    const { fileName, dateCaption } = buildCaptureMeta();
    const layout = computeLayout(taskListImg.width, taskListImg.height);

    const paddedCanvas = document.createElement("canvas");
    paddedCanvas.width = layout.canvasW;
    paddedCanvas.height = layout.canvasH;

    const ctx = paddedCanvas.getContext("2d");
    if (!ctx) {
      throw new Error("Failed to create canvas context.");
    }

    ctx.fillStyle = canvasBg;
    ctx.fillRect(0, 0, paddedCanvas.width, paddedCanvas.height);

    ctx.drawImage(taskListImg, layout.taskX, layout.taskY);

    drawCaptureDateLabel(ctx, dateCaption, layout, captionFill);

    return { paddedCanvas, fileName };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Failed to capture image. Please try again.");
  }
};

export default captureImages;

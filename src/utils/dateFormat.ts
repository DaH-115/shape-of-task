/**
 * 날짜 문자열을 한국식 표기(YYYY년 M월 D일)로 변환
 * @param dateStr - 파싱 가능한 날짜 문자열 (예: "3/10/2026", "2026-03-10")
 * @returns 한국식 날짜 문자열 (예: "2026년 3월 10일"), 파싱 실패 시 원본 반환
 */
export const formatDateToKorean = (dateStr: string): string => {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/**
 * 오늘 날짜를 저장용 ISO 형식(YYYY-MM-DD)으로 반환
 * 정렬 및 파싱 호환성을 위해 사용
 */
export const getTodayISOString = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

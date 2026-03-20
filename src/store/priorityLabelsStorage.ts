import { SHAPE_OPTIONS } from "@/types/task";

const PRIORITY_LABELS_KEY = "priorityLabels";

/** priority number(1,2,3) -> 커스텀 라벨 매핑 */
export type PriorityLabelsState = Partial<Record<1 | 2 | 3, string>>;

/** localStorage에서 커스텀 중요도 라벨 불러오기 */
export const getStoredPriorityLabels = (): PriorityLabelsState => {
  try {
    const stored = localStorage.getItem(PRIORITY_LABELS_KEY);
    if (!stored) return {};
    const parsed = JSON.parse(stored) as PriorityLabelsState;
    return parsed;
  } catch {
    return {};
  }
};

/** localStorage에 커스텀 중요도 라벨 저장 */
export const savePriorityLabels = (labels: PriorityLabelsState): void => {
  try {
    localStorage.setItem(PRIORITY_LABELS_KEY, JSON.stringify(labels));
  } catch (error) {
    console.error("중요도 라벨 저장 실패:", error);
  }
};

/** 기본 라벨 반환 (SHAPE_OPTIONS 기준) */
export const getDefaultLabel = (priority: 1 | 2 | 3): string => {
  const found = SHAPE_OPTIONS.find((opt) => opt.priority === priority);
  return found?.desc ?? "";
};

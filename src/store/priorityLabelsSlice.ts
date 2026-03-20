import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  getStoredPriorityLabels,
  savePriorityLabels,
  PriorityLabelsState,
  getDefaultLabel,
} from "./priorityLabelsStorage";

const initialState: PriorityLabelsState = getStoredPriorityLabels();

const priorityLabelsSlice = createSlice({
  name: "priorityLabels",
  initialState,
  reducers: {
    /** 특정 중요도의 라벨 업데이트 */
    updatePriorityLabel: (
      state,
      action: PayloadAction<{ priority: 1 | 2 | 3; label: string }>
    ) => {
      const { priority, label } = action.payload;
      const trimmed = label.trim();
      if (trimmed) {
        state[priority] = trimmed;
      } else {
        delete state[priority];
      }
    },
    /** 모든 라벨 초기화 (기본값으로) */
    resetPriorityLabels: () => ({}),
  },
});

export default priorityLabelsSlice;
export const { updatePriorityLabel, resetPriorityLabels } =
  priorityLabelsSlice.actions;

/** 현재 라벨 반환 (커스텀 있으면 사용, 없으면 기본값) */
export const getPriorityLabel = (
  labels: PriorityLabelsState,
  priority: 1 | 2 | 3
): string => labels[priority] ?? getDefaultLabel(priority);

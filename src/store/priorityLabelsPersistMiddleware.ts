import { Middleware } from "@reduxjs/toolkit";
import {
  savePriorityLabels,
  PriorityLabelsState,
} from "./priorityLabelsStorage";
import { updatePriorityLabel, resetPriorityLabels } from "./priorityLabelsSlice";

const PRIORITY_LABELS_ACTIONS = new Set<string>([
  updatePriorityLabel.type,
  resetPriorityLabels.type,
]);

/** priorityLabels 변경 시 localStorage에 자동 저장하는 미들웨어 */
export const priorityLabelsPersistMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action);

    const actionType =
      typeof action === "object" && action !== null && "type" in action
        ? (action as { type: string }).type
        : "";
    if (PRIORITY_LABELS_ACTIONS.has(actionType)) {
      const state = store.getState() as { priorityLabels: PriorityLabelsState };
      savePriorityLabels(state.priorityLabels);
    }

    return result;
  };

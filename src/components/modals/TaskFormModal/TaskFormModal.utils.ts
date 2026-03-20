import { ShapeName, SHAPE_OPTIONS, TaskTypes } from "@/types/task";

/** 검증 에러 타입 */
export interface TaskFormErrors {
  textError: string;
  shapeError: string;
}

/** Task 생성에 필요한 값 */
export interface CreateTaskParams {
  text: string;
  shape: ShapeName;
  id: string;
  date: string;
  /** 중요도 라벨 (미전달 시 SHAPE_OPTIONS 기본값 사용) */
  priorityDesc?: string;
}

/**
 * shape에 해당하는 우선순위 정보 반환
 * @param shape - 도형 이름
 * @returns priority number와 desc
 */
export const getPriority = (shape: ShapeName) => {
  const found = SHAPE_OPTIONS.find((opt) => opt.shape === shape);
  return found
    ? { number: found.priority, desc: found.desc }
    : { number: 0, desc: "" };
};

/**
 * 폼 검증: text, shape 유효성 검사
 * @param text - 할 일 입력값
 * @param shape - 선택된 중요도 (빈 문자열이면 미선택)
 * @returns 검증 에러 객체 (에러 없으면 빈 문자열)
 */
export const validateTaskForm = (
  text: string,
  shape: ShapeName | string,
): TaskFormErrors => ({
  textError: !text ? "할 일을 입력해주세요" : "",
  shapeError: !shape ? "중요도를 선택해주세요" : "",
});

/**
 * Task 객체 생성 (순수 함수)
 * @param params - text, shape, id, date
 * @returns TaskTypes 객체
 */
export const createTaskFromValues = ({
  text,
  shape,
  id,
  date,
  priorityDesc: priorityDescOverride,
}: CreateTaskParams): TaskTypes => {
  const { desc, number } = getPriority(shape);
  return {
    id,
    date,
    text,
    shape,
    priority: number,
    priorityDesc: priorityDescOverride ?? desc,
    done: false,
  };
};

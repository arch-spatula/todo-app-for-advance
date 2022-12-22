/**
 * Working -> Done -> Working
 * 목록 유형이 2개라는 보장은 없습니다. 3 ~ 5개의 칸반 스타일은 흔합니다. 확장성을 고려했습니다.
 */
export const shiftTodo = {
  Working: "Done",
  Done: "Working",
};

/**
 * 전환을 위해 사용하는 텍스트 문구입니다.
 */
export const shiftTodoText = {
  Working: "완료",
  Done: "취소",
};

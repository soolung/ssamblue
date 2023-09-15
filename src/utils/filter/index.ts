const Operator = {
  EQUAL: 'EQUAL',
  NOT_EQUAL: 'NOT_EQUAL',
  GREATER_THAN: 'GREATER_THAN',
  GREATER_THAN_OR_EQUAL: 'GREATER_THAN_OR_EQUAL',
  LESS_THAN: 'LESS_THAN',
  LESS_THAN_OR_EQUAL: 'LESS_THAN_OR_EQUAL',
  BEFORE: 'BEFORE',
  AFTER: 'AFTER',
  BEFORE_OR_EQUAL: 'BEFORE_OR_EQUAL',
  AFTER_OR_EQUAL: 'AFTER_OR_EQUAL',
  CONTAINS: 'CONTAINS',
} as const;
export type Operator = typeof Operator[keyof typeof Operator];

export interface Filter {
  questionId: number,
  target: string,
  operator: Operator
}

export const appendOrNone = ({ questionId, target, operator = 'EQUAL' }: {
  questionId: number,
  target: string | null,
  operator?: Operator
}): Filter[] => {
  return target != null && target !== '전체' ?
    [{
      questionId: questionId,
      operator: operator,
      target: target
    }] : [];
}

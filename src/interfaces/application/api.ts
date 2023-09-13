import { authorization } from '@/utils/token';
import { server } from '@/lib/axios';

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
  AFTER_OR_EQUAL: 'AFTER_OR_EQUAL'
} as const;
export type Operator = typeof Operator[keyof typeof Operator];

export interface Filter {
  questionId: number,
  target: string,
  operator: Operator
}

interface ApplicationResultParams {
  id: number,
  filterList?: Filter[]
}

export const getApplicationResult = async ({ id, filterList }: ApplicationResultParams) => {
  return (await server.post(`/application/${id}/result`, {
    filterList: filterList
  }, authorization())).data;
};

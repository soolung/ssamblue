import { authorization } from '@/utils/token';
import { server } from '@/lib/axios';

export const getApplicationResult = async (id: number) => {
  return (await server.get(`/application/${id}/result`, authorization())).data;
};

import { authorization } from '@/utils/token';
import { server } from '@/lib/axios';
import { Filter } from '@/utils/filter';


interface ApplicationResultParams {
  id: number,
  filterList?: Filter[]
}

export const getApplicationResult = async ({ id, filterList }: ApplicationResultParams) => {
  return (await server.post(`/application/${id}/result`, {
    filterList: filterList
  }, authorization())).data;
};

import { server } from '@/lib/axios';
import { authorization } from '@/utils/token';
import { User } from '@/types/user';

export const getUser = async (): Promise<User> => {
    return (await server.get('/user', authorization())).data;
}

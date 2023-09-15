import { atom, useRecoilState } from 'recoil';
import { User } from '@/types/user';

const userState = atom<User>({
    key: 'user',
    default: {
        name: '',
        authority: ''
    }
});

export const useUserRecoilState = () => useRecoilState(userState);

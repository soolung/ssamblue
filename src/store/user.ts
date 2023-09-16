import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { User } from '@/types/user';

const userState = atom<User>({
    key: 'user',
    default: {
        name: '',
        authority: ''
    }
});

export const useUserRecoilState = () => useRecoilState(userState);

export const useUserRecoilValue = () => useRecoilValue(userState);

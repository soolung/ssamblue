import { useQuery } from 'react-query';
import { USER } from '@/constants/queryKey';
import { useUserRecoilState } from '@/store/user';
import { getUser } from '@/interfaces/user/api';
import { Storage } from '@/lib/storage';
import { ACCESS_KEY } from '@/constants/auth';

const useUser = () => {
    const [user, setUser] = useUserRecoilState();
    const token = Storage.getItem(ACCESS_KEY);
    const { data } = useQuery([USER], getUser, {
        enabled: user.name == '' && !!token,
        onSuccess: (data) => {
            setUser(data);
        }
    });

    return { user: user, isLoggedIn: !!user || !!data };
};

export default useUser;

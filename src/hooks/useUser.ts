import { useQuery } from 'react-query';
import { USER } from '@/constants/queryKey';
import { useUserRecoilState } from '@/store/user';
import { getUser } from '@/interfaces/user/api';
import { Storage } from '@/lib/storage';
import { ACCESS_KEY } from '@/constants/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useUser = () => {
    const token = Storage.getItem(ACCESS_KEY);
    const router = useRouter();
    const [user, setUser] = useUserRecoilState();
    const { data } = useQuery([USER], getUser, {
        enabled: !!token && user.name == '',
        onSuccess: (data) => {
            setUser(data);
        }
    });

    useEffect(() => {
        if (!token) {
            router.push('/login')
        }
    }, [])

    return { user: user, isLoggedIn: !!user || !!data };
};

export default useUser;

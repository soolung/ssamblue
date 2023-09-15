import useUser from '@/hooks/useUser';
import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface PropsType {
    children: ReactNode;
}

const AuthShield = ({ children }: PropsType) => {
    const router = useRouter();
    const { isLoggedIn, user } = useUser();

    useEffect(() => {
        if (!isLoggedIn) {
            router.push('/login');
        }
    }, [isLoggedIn]);

    return <>{children}</>;
};

export default AuthShield;

import { useGoogleLoginMutation } from '@/interfaces/auth/mutation';
import { useSearchParams } from 'next/navigation';

export const useGoogleLogin = () => {
  const params = useSearchParams();
  const code = params.get("code");

  const mutation = useGoogleLoginMutation(code);

  return { mutation };
};

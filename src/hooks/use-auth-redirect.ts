import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useAuth from './use-auth';

export default function useAuthRedirect(path = '/library'): void {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      router.replace(path);
    }
  }, [isLoggedIn]);
}

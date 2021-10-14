import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function CategoryDashboard(): null {
  const router = useRouter();

  useEffect(() => {
    router.replace('/dashboard/authors/list');
  }, []);

  return null;
}

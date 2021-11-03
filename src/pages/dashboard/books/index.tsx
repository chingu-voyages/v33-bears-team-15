import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function BookDashboard(): null {
  const router = useRouter();

  useEffect(() => {
    router.replace('/dashboard/books/list');
  }, []);

  return null;
}

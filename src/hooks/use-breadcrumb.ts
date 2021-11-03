import { NextRouter, useRouter } from 'next/router';

interface Breadcrumb {
  label: string;
  path: string;
}

export default function useBreadcrumb() {
  const router: NextRouter = useRouter();
  const breadcrumbs: Breadcrumb[] = [];

  const pathArray = router.pathname.split('/').filter(Boolean);
  const uppercaseFirstLetterOfPath = pathArray.map(
    (path) => path.charAt(0).toUpperCase() + path.slice(1)
  );

  uppercaseFirstLetterOfPath.forEach((pathLabel, idx) => {
    const fullPathArray: string[] = [];
    const isLastEntry: boolean = pathArray.length - 1 === idx;

    for (let i = 0; i < pathArray.length; i += 1) {
      if (i > idx) break;

      fullPathArray.push(pathArray[i]);
    }

    const breadcrumbObject = {
      label: pathLabel,
      path: isLastEntry ? null : `/${fullPathArray.join('/')}`,
    };

    breadcrumbs.push(breadcrumbObject);
  });

  return breadcrumbs;
}

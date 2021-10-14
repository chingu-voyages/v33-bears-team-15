/* eslint-disable consistent-return */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { RoleType } from '~/types';

import useAuth from './use-auth';

/**
 * @description A custom hook used to grant role based access to resources
 * and redirect according to `currentUser` auth status
 * @param roles {RoleType[]} - An array including all roles that have access to this resource
 * @example
 * import { Role } from '~/types`;
 *
 * function MyComponent(props: IMyComponent) {
 *    useRoleAuthorization([Role.ADMIN, Role.SUPER_ADMIN])
 *
 *    return <MyJsx />
 * }
 */
export default function useRoleAuthorization(roles?: RoleType[]): void {
  const router = useRouter();
  const { currentUser, isLoggedIn } = useAuth();

  const protectedRoutes = ['/library'];
  const authRedirectRoutes = ['/', '/signin', '/signup', '/dashboard'];

  useEffect(() => {
    if ((!isLoggedIn || !currentUser) && protectedRoutes.includes(router.pathname)) {
      // protected routes
      // not logged in so redirect to sigin page
      router.replace('/signin');
    }

    if (roles && currentUser && roles.indexOf(currentUser.role) === -1) {
      // role not authorised so redirect to home page
      if (isLoggedIn || currentUser) {
        router.replace('/library');
      } else {
        router.replace('/');
      }
    }

    if ((isLoggedIn || currentUser) && authRedirectRoutes.includes(router.pathname)) {
      // redirect routes if logged in
      // pathname eq dashboard so redirect to home dash
      if (router.pathname === '/dashboard') {
        router.replace('/dashboard/home');
      } else {
        // any other auth routes redirect to library
        router.replace('/library');
      }
    }
  }, [isLoggedIn, currentUser, router.pathname]);
}

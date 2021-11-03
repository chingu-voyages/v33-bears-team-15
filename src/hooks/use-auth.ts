import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '~/hooks/store';
import { resetUserCredentials, selectUser, setUserCredentials } from '~/store/userSlice';
import {
  useSignInWithEmailAndPasswordMutation,
  useSignInAsAdminMutation,
  useSignInWithGoogleProviderMutation,
  useSignUpWithEmailAndPasswordMutation,
  useGetUserByIdQuery,
} from '~/services/api';
import { setTokenToCookie, removeToken, getTokenFromCookie } from '~/utils';
import { IAuthResponse, ISigninDto, ISignupDto, Role, RoleType } from '~/types';

export default function useAuth() {
  const [signInMutation] = useSignInWithEmailAndPasswordMutation();
  const [signUpMutation] = useSignUpWithEmailAndPasswordMutation();
  const [signInAsAdminMutation] = useSignInAsAdminMutation();
  const [signInWithGoogleMutation] = useSignInWithGoogleProviderMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userState = useAppSelector(selectUser);
  const { data, isLoading } = useGetUserByIdQuery(userState.credentials?.id);

  const getUserRoles = (claim: RoleType) => {
    return {
      isSuperAdmin: claim === Role.SUPER_ADMIN,
      isAdmin: claim === Role.ADMIN,
      isPublisher: claim === Role.PUBLISHER,
    };
  };

  const processUserAuth = useCallback(({ access_token, user }: IAuthResponse): void => {
    setTokenToCookie(access_token);

    dispatch(
      setUserCredentials({
        credentials: { id: user._id, role: user.role },
        currentUser: user,
        isLoggedIn: true,
        ...getUserRoles(user.role),
      })
    );

    router.replace('/library');
  }, []);

  const signInWithEmailAndPassword = useCallback(
    async (signInDto: ISigninDto): Promise<void> => {
      const data = await signInMutation(signInDto).unwrap();

      processUserAuth(data);
    },
    []
  );

  const signInAsAdmin = useCallback(async (signInDto: ISigninDto): Promise<void> => {
    const data = await signInAsAdminMutation(signInDto).unwrap();

    processUserAuth(data);
  }, []);

  const signInWithGoogleProvider = useCallback(async (): Promise<void> => {
    const data = await signInWithGoogleMutation().unwrap();

    processUserAuth(data);
  }, []);

  const signUpWithEmailAndPassword = useCallback(
    async (signUpDto: ISignupDto): Promise<void> => {
      const data = await signUpMutation(signUpDto).unwrap();

      processUserAuth(data);
    },
    []
  );

  const logout = useCallback((): void => {
    removeToken();
    dispatch(resetUserCredentials());
    router.replace('/signin');
  }, []);

  const refetchUserOnMount = useCallback(async (): Promise<void> => {
    if (data && !isLoading) {
      dispatch(
        setUserCredentials({
          ...userState,
          currentUser: data,
          isLoggedIn: true,
          ...getUserRoles(data.role),
        })
      );
    }
  }, [data, isLoading]);

  useEffect(() => {
    const jwtToken = getTokenFromCookie();

    if (jwtToken) {
      refetchUserOnMount();
    }
  }, [data]);

  return {
    signInWithEmailAndPassword,
    signInAsAdmin,
    signUpWithEmailAndPassword,
    signInWithGoogleProvider,
    logout,
    ...userState,
  };
}

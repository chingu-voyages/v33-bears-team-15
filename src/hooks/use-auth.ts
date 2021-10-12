import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '~/hooks/store';
import { resetUserCredentials, selectUser, setUserCredentials } from '~/store/userSlice';
import {
  useGetUserByIdMutation,
  useSignInWithEmailAndPasswordMutation,
  useSignInWithGoogleProviderMutation,
  useSignUpWithEmailAndPasswordMutation,
} from '~/services/api';
import { setTokenToCookie, removeToken, getTokenFromCookie } from '~/utils';
import { IAuthResponse, ISigninDto, ISignupDto, Role, RoleType } from '~/types';

export default function useAuth() {
  const [signInMutation] = useSignInWithEmailAndPasswordMutation();
  const [signUpMutation] = useSignUpWithEmailAndPasswordMutation();
  const [signInWithGoogleMutation] = useSignInWithGoogleProviderMutation();
  const [getUser] = useGetUserByIdMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userState = useAppSelector(selectUser);

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
    const user = await getUser(userState.credentials.id).unwrap();

    if (user) {
      dispatch(
        setUserCredentials({
          ...userState,
          currentUser: user,
          isLoggedIn: true,
          ...getUserRoles(user.role),
        })
      );
    } else {
      logout();
    }
  }, []);

  useEffect(() => {
    const jwtToken = getTokenFromCookie();

    if (jwtToken) {
      refetchUserOnMount();
    }
  }, []);

  return {
    signInWithEmailAndPassword,
    signUpWithEmailAndPassword,
    signInWithGoogleProvider,
    logout,
    ...userState,
  };
}

import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '~/hooks/store';
import {
  resetUserCredentials,
  selectCurrentUser,
  setUserCredentials,
} from '~/store/userSlice';
import {
  useGetUserByIdMutation,
  useSignInWithEmailAndPasswordMutation,
  useSignUpWithEmailAndPasswordMutation,
} from '~/services/api';
import {
  decodeToken,
  setTokenToCookie,
  removeToken,
  getTokenFromCookie,
} from '~/utils/jwt';
import { IAuthResponse, ISigninDto, ISignupDto } from '~/types';

export default function useAuth() {
  const [signInMutation] = useSignInWithEmailAndPasswordMutation();
  const [signUpMutation] = useSignUpWithEmailAndPasswordMutation();
  const [getUser] = useGetUserByIdMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userState = useAppSelector(selectCurrentUser);

  const processUserAuth = ({ access_token, user }: IAuthResponse): void => {
    setTokenToCookie(access_token);

    const { sub, claim } = decodeToken(access_token);

    dispatch(
      setUserCredentials({
        credentials: { id: sub, role: claim },
        user,
        isLoggedIn: true,
      })
    );

    router.replace('/library');
  };

  const signInWithEmailAndPassword = useCallback(
    async (signInDto: ISigninDto): Promise<void> => {
      const data = await signInMutation(signInDto).unwrap();

      processUserAuth(data);
    },
    []
  );

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
  }, []);

  useEffect(() => {
    const refetchUserOnMount = async (token: string) => {
      const { sub, claim } = decodeToken(token);

      const user = await getUser(sub).unwrap();

      dispatch(
        setUserCredentials({
          credentials: { id: sub, role: claim },
          user,
          isLoggedIn: true,
        })
      );
    };

    const jwtToken = getTokenFromCookie();

    if (jwtToken) {
      refetchUserOnMount(jwtToken);
    }
  }, []);

  return {
    signInWithEmailAndPassword,
    signUpWithEmailAndPassword,
    logout,
    user: userState.user,
    isLoggedIn: userState.isLoggedIn,
    credentials: userState.credentials,
  };
}

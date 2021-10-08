// eslint-disable-next-line import/no-named-as-default
import axiosClient from '../lib/axiosClient';

type CreateUser = { email: string; password: string; fullName: string };
type SignInUser = { email: string; password: string };

export function signUpWithEmailAndPassword(payload: CreateUser) {
  return axiosClient.post('/api/v1/auth/signup', payload);
}

export function signInWithEmailAndPassword(payload: SignInUser) {
  return axiosClient.post('/api/v1/auth/signin', payload);
}

export function getUserData(userId: string) {
  return axiosClient.get(`/api/v1/users/${userId}`);
}

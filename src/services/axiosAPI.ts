import axiosClient from '../lib/axiosClient';

type CreateUser = { email: string; password: string; fullName: string };
type SignInUser = { email: string; password: string };

export function axiosSignUp(URL: string, payload: CreateUser) {
  return axiosClient.post(`${URL}`, payload).then((response) => response);
}

export function axiosSignIn(URL: string, payload: SignInUser) {
  return axiosClient.post(`${URL}`, payload).then((response) => response);
}

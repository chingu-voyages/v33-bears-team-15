import jwt from 'jwt-decode';
import Cookies from 'js-cookie';

import type { ITokenSignature } from '~/types';

const JWT_KEY = 'jwt';

export function decodeToken(token: string): ITokenSignature {
  return jwt<ITokenSignature>(token);
}

export function setTokenToCookie(token: string): void {
  const decodedToken = decodeToken(token);

  const expirationEpochDate = decodedToken.exp;
  const issuedEpochDate = decodedToken.iat;

  const expirationDateInDays = Math.floor(
    (expirationEpochDate - issuedEpochDate) / 86400
  );

  Cookies.set(JWT_KEY, token, { expires: expirationDateInDays, secure: true });
}

export function getDecodedTokenFromCookie(): ITokenSignature | null {
  const cookieToken = Cookies.get(JWT_KEY);

  if (cookieToken) {
    return decodeToken(cookieToken);
  }

  return null;
}

export function getTokenFromCookie(): string | null {
  const cookieToken = Cookies.get(JWT_KEY);

  return cookieToken || null;
}

export function removeToken(): void {
  return Cookies.remove(JWT_KEY);
}

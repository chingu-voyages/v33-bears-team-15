import jwt from 'jwt-decode';
import Cookies from 'js-cookie';

type TokenSignature = {
  sub: string;
  claim: '3' | '1' | '2' | '4' | '5';
  iat: number;
  exp: number;
};

const JWT_KEY = 'jwt';

export function decodeToken(token: string): TokenSignature {
  return jwt<TokenSignature>(token);
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

export function getTokenFromCookie(): TokenSignature | null {
  const cookieToken = Cookies.get(JWT_KEY);

  if (cookieToken) {
    return decodeToken(cookieToken);
  }

  return null;
}

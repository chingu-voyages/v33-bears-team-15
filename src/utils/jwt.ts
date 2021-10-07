import jwt from 'jwt-decode';
import Cookies from 'js-cookie';

export function decodeToken(signInResponseData) {
  const token = signInResponseData.data.access_token;
  const decodedData = jwt(token);
  return decodedData;
}

export function setTokenToCookie(decodedToken) {
  const expirationEpochDate = decodedToken.exp;
  const issuedEpochDate = decodedToken.iat;
  const expirationDateInDays = Math.floor(
    (expirationEpochDate - issuedEpochDate) / 86400
  );

  Cookies.set('auth', '', { expires: expirationDateInDays });
}

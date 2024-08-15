import { jwtDecode } from 'jwt-decode';

function decodeJWT(token) {
  const decodedToken = jwtDecode(token);
  return decodedToken;
}

export default decodeJWT;

import { jwtDecode } from 'jwt-decode';

function decodeJwt(token) {
  const decodedToken = jwtDecode(token);
  return decodedToken;
}

export default decodeJwt;

import { jwtDecode } from 'jwt-decode';

function useDecodeJWT(token) {
  const decodedToken = jwtDecode(token);
  return decodedToken;
}

export default useDecodeJWT;

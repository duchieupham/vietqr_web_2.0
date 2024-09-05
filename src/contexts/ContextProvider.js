import { AppContextProvider } from './AppContext';
import { AuthContextProvider } from './AuthContext';

const ContextProvider = ({ children }) => (
  <AppContextProvider>
    <AuthContextProvider>{children}</AuthContextProvider>
  </AppContextProvider>
);

export default ContextProvider;

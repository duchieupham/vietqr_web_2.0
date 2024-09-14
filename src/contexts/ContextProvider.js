import { AppContextProvider } from './providers/AppContextProvider';
import { AuthContextProvider } from './providers/AuthContextProvider';
import { SnackbarContextProvider } from './providers/SnackbarContextProvider';

const ContextProvider = ({ children }) => (
  <AppContextProvider>
    <AuthContextProvider>
      <SnackbarContextProvider>{children}</SnackbarContextProvider>
    </AuthContextProvider>
  </AppContextProvider>
);

export default ContextProvider;

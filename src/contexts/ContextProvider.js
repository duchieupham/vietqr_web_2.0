import { AuthContextProvider } from './AuthContext';
import { CollapseDrawerProvider } from './CollapseDrawerContext';
import { AppContextProvider } from './AppContext';

const ContextProvider = ({ children }) => (
  <AppContextProvider>
    <CollapseDrawerProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </CollapseDrawerProvider>
  </AppContextProvider>
);

export default ContextProvider;

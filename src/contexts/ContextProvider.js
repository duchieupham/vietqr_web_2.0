import { AuthContextProvider } from './AuthContext';
import { CollapseDrawerProvider } from './CollapseDrawerContext';

const ContextProvider = ({ children }) => (
  // Add more context if any
  <CollapseDrawerProvider>
    <AuthContextProvider>{children}</AuthContextProvider>
  </CollapseDrawerProvider>
);

export default ContextProvider;

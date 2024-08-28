import { AuthContextProvider } from './AuthContext';
import { CollapseDrawerProvider } from './CollapseDrawerContext';
import { LanguageProvider } from './LanguageContext';

const ContextProvider = ({ children }) => (
  // Add more context if any
  <LanguageProvider>
    <CollapseDrawerProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </CollapseDrawerProvider>
  </LanguageProvider>
);

export default ContextProvider;

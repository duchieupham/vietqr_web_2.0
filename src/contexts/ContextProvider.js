const { AuthContextProvider } = require('./AuthContext');

const ContextProvider = ({ children }) => (
  // Add more context if any
  <AuthContextProvider>{children}</AuthContextProvider>
);

export default ContextProvider;

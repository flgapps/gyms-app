import { AuthProvider } from "./context/Auth/AuthContext";
import { RoutesApp } from "./routes/RoutesApp";

export const App = () => {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  );
};

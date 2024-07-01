import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";

export const Heroespedia = () => {

   return (
      <AuthProvider>
         <AppRouter />
      </AuthProvider>
   )
}

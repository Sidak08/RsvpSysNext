import { ClientCookiesProvider } from "./cookies";
import { cookies } from "next/headers";

export function Providers({ children }) {
  return (
    <ClientCookiesProvider value={cookies().getAll()}>
      {children}
    </ClientCookiesProvider>
  );
}

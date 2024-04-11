import { BrowserRouter } from "react-router-dom";
import Routes from "@/routes";
import AuthProvider from "@/context/auth-provider";
import { ThemeProvider } from "@/context/theme-provider";

export default function Home() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="theme">
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

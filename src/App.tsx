import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import ConfigPage from "./pages/ConfigPage";
import ControllerPage from "./pages/ControllerPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function App() {
  const queryClient = new QueryClient();
  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/configPage" element={<ConfigPage />} />
            <Route path="/controllerPage" element={<ControllerPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </MantineProvider>
  );
}

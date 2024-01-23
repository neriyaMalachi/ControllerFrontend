import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import ConfigPage from "./pages/ConfigPage";
import ControllerPage from "./pages/ControllerPage";
import NavBar from "./pages/NavBar";
export default function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/configPage" element={<ConfigPage />} />
          <Route path="/controllerPage" element={<ControllerPage />} />

        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

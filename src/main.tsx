import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components"; // 올바른 import
import App from "./App.tsx";
import { lightTheme } from "./components/theme.ts";
import "./index.css";

function Main() {
  return (
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
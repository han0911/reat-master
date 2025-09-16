import { useState } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App.tsx";
import "./index.css";

const darkTheme = {
  background: "black",
  textcolor: "white",
};
const lightTheme = {
  background: "white",
  textcolor: "black",
};

function Main() {
  const [D, setD] = useState(false);
  return (
    <ThemeProvider theme={D ? darkTheme : lightTheme}>
      <App D={D} setD={setD} />
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")!).render(<Main />);

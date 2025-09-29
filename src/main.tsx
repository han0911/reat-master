import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import DragDrop from "./components/DragDrop";
import { darktheme } from "./theme";
const query = new QueryClient();

function Main() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={darktheme}>
        <QueryClientProvider client={query}>
          <DragDrop />
        </QueryClientProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);

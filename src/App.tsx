import { RouterProvider } from "react-router-dom";
import router from "./router";

interface AppProps {
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
  dark: boolean;
}

function App({ setDark, dark }: AppProps) {
  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <div>
      <button onClick={toggleTheme}>{dark ? "화이트모드" : "다크모드"}</button>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

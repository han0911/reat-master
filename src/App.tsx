import { RouterProvider } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Dark } from "./components/atoms";
import router from "./router";

function App() {
  const [dark, setDark] = useRecoilState(Dark);
  return (
    <div>
      <button onClick={() => setDark(!dark)}>
        {dark ? "화이트모드" : "다크모드"}
      </button>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

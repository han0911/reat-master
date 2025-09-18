import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Headr";

function App() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  );
}

export default App;

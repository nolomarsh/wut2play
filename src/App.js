import "./styles/App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;

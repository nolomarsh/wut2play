import "./styles/App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <main>
        <h1>Wut2Play</h1>
        <Outlet />
      </main>
    </>
  );
};

export default App;

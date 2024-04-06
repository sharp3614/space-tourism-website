import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div className="fixed w-full">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;

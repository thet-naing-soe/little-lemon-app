import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import OrderOnline from "./pages/Order Online";
import Login from "./pages/Login";
import Donate from "./pages/Donate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </>
  );
}
export default App;

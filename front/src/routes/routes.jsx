import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "pages/register";
import RegisterProduct from "pages/registerProduct";
import Dashboard from "pages/dashboard";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/registerProduct' element={<RegisterProduct />} />
      <Route path="/dash" element={<Dashboard />} />
    </Routes>
  );
}

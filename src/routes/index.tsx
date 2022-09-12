import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/dashboard/" element={<Dashboard />} />
      <Route path="/signup/" element={<SignUp />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

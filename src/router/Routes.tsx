import { Route, Routes } from "react-router-dom";

import Login from "@/screens/Login";
import { BudgetTable } from "../screens/BudgetTable";
import Home from "../screens/Home";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/tst" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/budget" element={<BudgetTable />} />
    </Routes>
  )
}
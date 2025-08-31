import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import CustomersPage from "./pages/CustomersPage";
import ReportsPage from "./pages/ReportsPage";
import ProductPage from "./pages/ProductPage";
import PromotePage from "./pages/PromotePage";
import HelpPage from "./pages/HelpPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/income" element={<ReportsPage />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/PromotePage" element={<PromotePage/>}/>
        <Route path="/HelpPage" element={<HelpPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;

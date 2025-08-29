import React, { useState } from "react";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import CustomersPage from "./pages/CustomersPage";
import ReportsPage from "./pages/ReportsPage";

function App() {
  const [page, setPage] = useState("Dashboard");

  const renderPage = () => {
    switch (page) {
      case "Dashboard":
        return <DashboardPage />;
      case "Customers":
        return <CustomersPage />;
      case "Reports":
        return <ReportsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <Layout>
      {renderPage()}
      <div className="fixed bottom-4 right-4 flex gap-2">
        <button
          onClick={() => setPage("Dashboard")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Dashboard
        </button>
        <button
          onClick={() => setPage("Customers")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Customers
        </button>
        <button
          onClick={() => setPage("Reports")}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Reports
        </button>
      </div>
    </Layout>
  );
}

export default App;

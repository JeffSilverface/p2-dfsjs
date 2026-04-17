import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { DashboardPage } from "./pages/DashboardPage";
import { CountryDetailPage } from "./pages/CountryDetailPage";
import { NotFound404 } from "./pages/NotFound404";

export const Router = () => {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        {/* Route parente : affiche le Layout */}
        <Route element={<Layout />}>
          {/* Routes enfants : s'affichent dans le <Outlet /> du Layout */}
          <Route path="/" element={<DashboardPage />} />
          <Route path="/country/:id" element={<CountryDetailPage />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

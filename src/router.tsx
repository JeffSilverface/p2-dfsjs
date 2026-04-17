import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Country } from "./pages/Country";

export const Router = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        {/* Route parente : affiche le Layout */}
        <Route element={<Layout />}>
          {/* Routes enfants : s'affichent dans le <Outlet /> du Layout */}
          <Route path="/" element={<Home />} />
          <Route path="/country/:id" element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

import { Outlet } from "react-router-dom";
import { HeaderComponent } from "./HeaderComponent";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main>
        <HeaderComponent />
        <Outlet />
      </main>
    </div>
  );
};

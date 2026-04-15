import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
};

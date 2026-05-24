import { Outlet } from "react-router-dom";
import PublicNavbar from "@/components/navbar/PublicNavbar";

const PublicLayout = () => {
  return (
    <div className="container mx-auto flex flex-col h-screen">
      <PublicNavbar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;

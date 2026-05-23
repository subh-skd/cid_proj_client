import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "@/components/navbar/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <>
      <DashboardNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default DashboardLayout;

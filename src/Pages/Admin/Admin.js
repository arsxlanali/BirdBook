import Sidebar from "../../Components/Sidebar/SidebarAdmin";
import Navbar from "../../Components/NavBar/NavbarAdmin";

import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <Navbar />
      <div className="admin-div">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Admin;

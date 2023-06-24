import { Outlet } from "react-router-dom";

//react taoastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout() {
  return (
    <>
      <div className="min-h-screen bg-[#E8F4FF]">
        <Outlet />
      </div>

      <ToastContainer />
    </>
  );
}

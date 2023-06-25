//react router dom
import { Outlet } from "react-router-dom";

//pic
// import

export default function PanelLayout() {
  return (
    <div className="grid grid-cols-12 w-full min-h-screen">
      <div className="h-full bg-white col-span-3"></div>
      <div></div>
    </div>
  );
}
